import { useEffect } from "react";

// The embedded LeadConnector form. The iframe renders the form itself; the
// embed script resizes it to fit its content and wires up cookie consent, so
// it is loaded once however many forms a page carries.
const FORM_ID = "hzleWsuOiY3QkXX3Af5u";
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

export default function LeadForm() {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={FORM_SRC}
      title="Request a quote from Reinvent Digital"
      id={`inline-${FORM_ID}`}
      // 779px is the form's own height; the embed script adjusts it to fit.
      className="h-[779px] w-full border-0"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Request_Quote_RD_New_Website_Form"
      data-height="779"
      data-layout-iframe-id={`inline-${FORM_ID}`}
      data-form-id={FORM_ID}
      data-cookie-consent="true"
      data-cookie-consent-provider="auto"
    />
  );
}
