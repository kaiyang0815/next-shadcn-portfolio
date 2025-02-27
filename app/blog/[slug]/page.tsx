import Comment from "@/components/comment";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { CustomMDX } from "@/components/mdx";
import TableOfContents from "@/components/toc";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getContent } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getContent(["content", "posts", "notes"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = getContent(["content", "posts", "notes"]).find(
    (post) => post.slug === slug,
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="container-wrapper">
      <div className="container py-6">
        <ScrollProgress className="sticky top-14" />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="font-medium">Table of Contents</p>
            </AccordionTrigger>
            <AccordionContent>
              <TableOfContents content={post.content} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <CustomMDX source={post.content} />
        <Comment />
      </div>
    </div>
  );
}
