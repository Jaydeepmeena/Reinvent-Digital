import { Children, isValidElement } from "react";

// SplitText moves the text React rendered into its own spans, so React can no
// longer patch that text in place: changing it throws "removeChild … not a
// child of this node". Keying the split element on its text makes React
// replace the element whole when the text changes, and lets the split re-run.
export function splitKey(children) {
  let text = "";
  Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") text += child;
    else if (isValidElement(child)) text += `<${splitKey(child.props.children)}>`;
  });
  return text;
}
