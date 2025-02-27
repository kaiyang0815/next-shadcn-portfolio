import GithubSlugger from "github-slugger";
import Link from "next/link";

interface TocProps {
  content: string;
}
export default function TableOfContents({ content }: TocProps) {
  const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  const slugger = new GithubSlugger();

  const headings = Array.from(content.matchAll(regXHeader)).map(
    ({ groups }) => {
      const flag = groups?.flag;
      const content = groups?.content;
      return {
        level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
        text: content,
        slug: content ? slugger.slug(content) : undefined,
      };
    },
  );
  return (
    <div className="space-y-2">
      {headings &&
        headings.map((heading) => {
          return (
            <div key={heading.slug}>
              <Link
                data-level={heading.level}
                href={"#" + heading.slug}
                className="hover:underline data-[level=three]:pl-8 data-[level=two]:pl-4"
              >
                {heading.text}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
