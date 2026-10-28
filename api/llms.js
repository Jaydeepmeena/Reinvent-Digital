// GET /llms.txt — a plain-language map of the site for AI assistants
// (https://llmstxt.org), read from the CMS at request time.
import { loadSite, originOf, send } from "./_lib/siteContent.js";

const SUMMARY =
  "Reinvent Digital is a healthcare digital marketing agency in India. It runs Google Ads, Meta Ads, SEO, AEO and GEO, " +
  "Google Business Profile, CRM, call-centre and WhatsApp follow-up for dental clinics, IVF clinics, eye clinics and " +
  "multi-speciality hospitals, and measures every campaign by patients who walk in rather than leads.";

// Markdown link text cannot hold an unescaped bracket.
const clean = (text) => text.replace(/[[\]]/g, "");

export default async function handler(req, res) {
  const origin = originOf(req);
  const { sections } = await loadSite();

  const lines = ["# Reinvent Digital", "", `> ${SUMMARY}`, ""];
  for (const { title, items } of sections) {
    lines.push(`## ${title}`, "");
    for (const { path, title: name, description } of items) {
      lines.push(`- [${clean(name)}](${origin}${path})${description ? `: ${description}` : ""}`);
    }
    lines.push("");
  }

  send(res, "text/plain", lines.join("\n"));
}
