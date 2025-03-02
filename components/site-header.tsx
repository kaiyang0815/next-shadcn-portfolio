import { SiteConfig } from "@/app/[locale]/config";
import { CommandMenu } from "@/components/command-menu";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getContent } from "@/lib/data";
import { Github } from "lucide-react";

export function SiteHeader() {
  const posts = getContent(["content", "posts", "notes"]).filter(
    (post) => !post.metadata.draft,
  );
  const projects = getContent(["content", "projects"]).filter(
    (proj) => !proj.metadata.draft,
  );
  const postLinks = posts.map((post) => {
    return {
      title: post.metadata.title,
      href: "/blog/" + post.slug,
    };
  });
  const projectLinks = projects.map((proj) => {
    return {
      title: proj.metadata.title,
      href: "/projects/" + proj.slug,
    };
  });
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu postLinks={postLinks} projectLinks={projectLinks} />
            </div>
            <nav className="flex items-center gap-0.5">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 px-0"
              >
                <Link
                  href={SiteConfig.siteGithubURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ModeSwitcher />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
