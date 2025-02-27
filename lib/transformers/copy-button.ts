import type { ShikiTransformer } from "shiki";

export function transformerCopyButton(): ShikiTransformer {
  return {
    pre(node) {
      node.children.push({
        type: "element",
        tagName: "button",
        properties: {
          type: "button",
          class: "rehype-copy-button",
        },
        children: [],
      });
    },
  };
}
