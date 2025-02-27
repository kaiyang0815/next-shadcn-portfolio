import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type PostListProps = {
  featured: boolean;
  postList: Post[];
};

export default function PostList({ featured, postList }: PostListProps) {
  const filteredPosts = featured
    ? postList.filter((post) => post.metadata.featured)
    : postList;
  const sortedPosts = filteredPosts
    .filter((post) => {
      return !post.metadata.draft;
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt!).getTime() -
        new Date(a.metadata.publishedAt!).getTime(),
    );
  return (
    <div>
      {sortedPosts.map((post) => (
        <Card key={post.slug} className="my-4 h-fit">
          <CardHeader>
            <CardTitle className="text-2xl">{post.metadata.title}</CardTitle>
            <CardDescription>
              {post.metadata.publishedAt!.toLocaleDateString()}
              <div className="mt-4 flex space-x-2">
                {post.metadata.tags.map((tag, index) => (
                  <Badge
                    variant="outline"
                    key={index}
                    className="cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-700"
                  >
                    {"#" + tag}
                  </Badge>
                ))}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{post.metadata.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`/blog/${post.slug}`}>
                {"Read"}
                <ChevronRight className="hover:translate-x-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
