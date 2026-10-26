import { useEffect, useState } from "react";

// An <img> that falls back to a bundled image when its source fails to load.
//
// The CMS can set an image URL that overrides the bundled one; if that URL is
// broken (404, moved, blocked), onError swaps to the bundled `fallback` so the
// page shows the bundled photo instead of a blank gap. A source that loads —
// even if it is not the image you expected — is left as is, since the browser
// cannot tell "wrong picture" from "right picture".
export default function SmartImage({ src, fallback, ...props }) {
  const [current, setCurrent] = useState(src || fallback);

  useEffect(() => {
    setCurrent(src || fallback);
  }, [src, fallback]);

  return (
    <img
      src={current}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback);
      }}
      {...props}
    />
  );
}
