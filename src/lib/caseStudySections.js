// Splits a case study's article HTML into ordered sections so the page can give
// some of them a richer treatment while the rest stay as prose, all in their
// original order. Sections are delimited by <h2>; a section's type is decided by
// its heading, and the ones we render specially ("the challenge", "what we did",
// "results by channel") are returned as structured data instead of HTML.
//
// Anything it does not recognise comes back as { type: "prose", html }, so a
// study whose body is shaped differently still renders in full.
const cap = (text) => (text ? text.charAt(0).toUpperCase() + text.slice(1) : text);

function toContainer(nodes, doc) {
  const el = doc.createElement("div");
  nodes.forEach((node) => el.appendChild(node.cloneNode(true)));
  return el;
}

// "The challenge": a <ul> of "<strong>Title:</strong> body" (or plain) items.
function readBullets(el) {
  return [...el.querySelectorAll("li")]
    .map((li) => {
      const strong = li.querySelector("strong");
      if (strong) {
        const title = strong.textContent.trim().replace(/:\s*$/, "");
        const body = li.textContent.replace(strong.textContent, "").replace(/^\s*:?\s*/, "").trim();
        return { title, body };
      }
      return { title: null, body: li.textContent.trim() };
    })
    .filter((item) => item.title || item.body);
}

// "What we did": "<h3>01 · Title</h3><p>body</p>" steps, with any extra
// paragraph (e.g. "Services used: …") returned separately as a note.
function readSteps(el) {
  const steps = [];
  const extra = [];
  let current = null;
  let captured = false;
  [...el.children].forEach((node) => {
    if (node.tagName === "H3") {
      const text = node.textContent.trim();
      const match = text.match(/^(\d+)\s*[·.-]\s*(.*)$/);
      current = {
        num: match ? match[1].padStart(2, "0") : String(steps.length + 1).padStart(2, "0"),
        title: match ? match[2].trim() : text,
        body: "",
      };
      steps.push(current);
      captured = false;
    } else if (node.tagName === "P" || node.tagName === "UL") {
      if (current && !captured) {
        current.body = node.textContent.trim();
        captured = true;
      } else {
        extra.push(node.textContent.trim());
      }
    }
  });
  return { steps: steps.filter((s) => s.title), note: extra.join(" ").trim() || null };
}

// "Results by channel": "<h3>Channel</h3><ul><li><strong>value</strong> — label"
function readChannels(el) {
  const channels = [];
  let current = null;
  [...el.children].forEach((node) => {
    if (node.tagName === "H3") {
      current = { name: node.textContent.trim(), metrics: [] };
      channels.push(current);
    } else if (node.tagName === "UL" && current) {
      node.querySelectorAll("li").forEach((li) => {
        const value = (li.querySelector("strong")?.textContent ?? li.textContent.split(/[—–-]/)[0]).trim();
        const label = cap(li.textContent.replace(value, "").replace(/^\s*[—–-]\s*/, "").trim());
        if (value && label) current.metrics.push({ value, label });
      });
    }
  });
  return channels.filter((c) => c.metrics.length);
}

export function parseCaseStudy(html) {
  if (!html || typeof window === "undefined") return [{ type: "prose", html: html ?? "" }];
  const doc = new DOMParser().parseFromString(`<div id="cs">${html}</div>`, "text/html");
  const root = doc.getElementById("cs");

  const raw = [];
  let current = { title: null, nodes: [] };
  const flush = () => {
    if (current.title !== null || current.nodes.length) raw.push(current);
  };
  root.childNodes.forEach((node) => {
    if (node.nodeType === 1 && node.tagName === "H2") {
      flush();
      current = { title: node.textContent.trim(), nodes: [] };
    } else {
      current.nodes.push(node);
    }
  });
  flush();

  return raw.map(({ title, nodes }) => {
    const el = toContainer(nodes, doc);
    const key = (title ?? "").toLowerCase();
    if (/results?\s+by\s+channel/.test(key)) return { type: "channels", title, channels: readChannels(el) };
    if (/the\s+challenge/.test(key)) return { type: "challenge", title, items: readBullets(el) };
    if (/what\s+we\s+did/.test(key)) return { type: "whatWeDid", title, ...readSteps(el) };
    return { type: "prose", html: (title ? `<h2>${title}</h2>` : "") + el.innerHTML };
  });
}
