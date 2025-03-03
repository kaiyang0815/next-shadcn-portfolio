import { SiteConfig } from "@/app/config";
import {
  FarmerIcon,
  NextJSIcon,
  ReactJSIcon,
  ShadcnUIIcon,
  TailwindCSSIcon,
} from "@/components/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import PostList from "@/components/post-list";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { getContent } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  const posts = getContent(["content", "posts", "notes"]);

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>
          <span>{SiteConfig.siteAuthor}</span>
          <span>{SiteConfig.siteDomain}</span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          {SiteConfig.siteDescription}
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/projects">Showcase</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <InfiniteSlider gap={24} duration={15} reverse>
              <NextJSIcon />
              <TailwindCSSIcon />
              <ReactJSIcon />
              <FarmerIcon />
              <ShadcnUIIcon />
            </InfiniteSlider>
          </div>
        </div>
      </div>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <h2 className="text-2xl font-semibold">Featured Posts</h2>
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <PostList featured postList={posts} />
        </div>
      </div>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <h2 className="text-2xl font-semibold">Recent Posts</h2>
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <PostList featured postList={posts} />
        </div>
      </div>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <h2 className="text-2xl font-semibold">Recent Projects</h2>
          </div>
        </div>
      </div>
    </>
  );
}
