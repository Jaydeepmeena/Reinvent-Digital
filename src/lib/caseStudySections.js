// Splits a case study's article HTML into ordered sections so the page can give
// some of them a richer treatment while the rest stay as prose, all in their
// original order. Sections are delimited by <h2>; a section's type is decided by
// its heading, and the ones we render specially ("the challenge", "what we did",
// "results by channel") are returned as structured data instead of HTML.
//
// Anything it does not recognise comes back as { type: "prose", html }, so a
// study whose body is shaped differently still renders in full.
// Title-case a heading the way the source doc does: edge words always capital,
// short joining words lower, and anything already carrying a capital or a digit
// (SEO, UX, FAQs, D2C, WhatsApp, A+) left untouched. Hyphen parts capitalise.
const SMALL = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "if", "in", "nor", "of", "on", "or", "per", "the", "to", "vs", "via", "with",
]);
function titleCase(text) {
  if (!text || typeof text !== "string") return text;
  const words = text.trim().split(/\s+/);
  const last = words.length - 1;
  return words
    .map((word, i) => {
      if (i !== 0 && i !== last && SMALL.has(word.toLowerCase())) return word.toLowerCase();
      return word
        .split("-")
        .map((seg) => (!seg || /[A-Z0-9]/.test(seg) ? seg : seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase()))
        .join("-");
    })
    .join(" ");
}

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
        const title = titleCase(strong.textContent.trim().replace(/:\s*$/, ""));
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
        title: titleCase(match ? match[2].trim() : text),
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

// The intro facts line: "Industry: … · Location: … · Timeframe: …".
function readMeta(el) {
  const text = el.textContent.trim();
  if (!/industry\s*[:：]/i.test(text)) return null;
  const fields = text
    .replace(/\.\s*$/, "")
    .split(/\s+[·•]\s+/)
    .map((segment) => {
      const match = segment.match(/^\s*([^:：]+)[:：]\s*(.+)$/);
      return match ? { label: match[1].trim(), value: match[2].trim() } : null;
    })
    .filter(Boolean);
  return fields.length >= 2 ? fields : null;
}

// "Results by channel": "<h3>Channel</h3><ul><li><strong>value</strong> — label"
function readChannels(el) {
  const channels = [];
  let current = null;
  [...el.children].forEach((node) => {
    if (node.tagName === "H3") {
      current = { name: titleCase(node.textContent.trim()), metrics: [] };
      channels.push(current);
    } else if (node.tagName === "UL" && current) {
      node.querySelectorAll("li").forEach((li) => {
        const value = (li.querySelector("strong")?.textContent ?? li.textContent.split(/[—–-]/)[0]).trim();
        const label = titleCase(li.textContent.replace(value, "").replace(/^\s*[—–-]\s*/, "").trim());
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
    if (title === null) {
      const fields = readMeta(el);
      if (fields) return { type: "meta", fields };
    }
    if (/results?\s+by\s+channel/.test(key)) return { type: "channels", title: titleCase(title), channels: readChannels(el) };
    if (/the\s+challenge/.test(key)) return { type: "challenge", title: titleCase(title), items: readBullets(el) };
    if (/what\s+we\s+did/.test(key)) return { type: "whatWeDid", title: titleCase(title), ...readSteps(el) };
    if (/about\s+the\s+client/.test(key)) return { type: "callout", variant: "about", title: titleCase(title), html: el.innerHTML };
    if (/our\s+approach/.test(key)) return { type: "callout", variant: "approach", title: titleCase(title), html: el.innerHTML };
    el.querySelectorAll("h3").forEach((h) => (h.textContent = titleCase(h.textContent.trim())));
    return { type: "prose", html: (title ? `<h2>${titleCase(title)}</h2>` : "") + el.innerHTML };
  });
}
