import { useState } from "react";

// An <img> that falls back to a bundled image when its source fails to load.
//
// The CMS can set an image URL that overrides the bundled one; if that URL is
// broken (404, moved, blocked), onError swaps to the bundled `fallback` so the
// page shows the bundled photo instead of a blank gap. A source that loads —
// even if it is not the image you expected — is left as is, since the browser
// cannot tell "wrong picture" from "right picture".
export default function SmartImage({ src, fallback, ...props }) {
  const [failed, setFailed] = useState(false);
  // Reset the failed flag when the source changes, using the render-time
  // "previous prop" pattern rather than an effect.
  const [prevSrc, setPrevSrc] = useState(src);
  if (src !== prevSrc) {
    setPrevSrc(src);
    setFailed(false);
  }

  const current = failed && fallback ? fallback : src || fallback;

  return <img src={current} onError={() => failed || setFailed(true)} {...props} />;
}
