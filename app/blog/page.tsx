import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import PostList from "@/components/post-list";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getContent } from "@/lib/data";
import Link from "next/link";

export default function BlogPage() {
  const notes = getContent(["content", "posts", "notes"]);
  const tutorials = getContent(["content", "posts", "tutorials"]);
  const sortedPosts = notes.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt!).getTime() -
      new Date(a.metadata.publishedAt!).getTime(),
  );
  const latestPost = sortedPosts[0];
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>
          <span>All Posts</span>
          <span>Read anyone</span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          {
            "Articles I have written and compiled, including various knowledge organized during the process of learning to code and excerpts from some internet articles that I think are good."
          }
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href={`/blog/${latestPost.slug}`}>Started Read</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <Tabs defaultValue="notes">
        <div className="border-grid border-b">
          <div className="container-wrapper">
            <div className="container py-4">
              <TabsList>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              </TabsList>
            </div>
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container py-6">
            <TabsContent value="notes">
              <PostList featured={false} postList={notes} />
            </TabsContent>
            <TabsContent value="tutorials">
              <PostList featured={false} postList={tutorials} />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </>
  );
}
