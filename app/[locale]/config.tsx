import { Aperture, Newspaper, Sparkles } from "lucide-react";
import React from "react";

const SiteConfig = {
  siteName: "Mizar",
  siteUrl: "https://kaiyang.xyz",
  siteDomain: "kaiyang.xyz",
  siteDescription:
    "A Frontend Developer, which is a Full Stack Developer, who is also a UI/UX Designer, and a Photographer.",
  siteKeywords:
    "Next.js, ShadcnUI, Blog, Frontend, Developer, Designer, Photographer",
  siteAuthor: "Mizar WANG",
  siteGithubURL: "https://github.com/kaiyang0815/next-shadcn-portfolio",
};

const SocialLinks = {
  github: "",
  twitter: "",
  linkedin: "",
};

const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

type NavLink = {
  name: string;
  href: string;
  icon?: React.ReactElement;
};

const NavLinks: NavLink[] = [
  {
    name: "blog",
    href: "/blog",
    icon: <Newspaper size={"14"} className="mr-2" />,
  },
  {
    name: "projects",
    href: "/projects",
    icon: <Sparkles size={"14"} className="mr-2" />,
  },
  {
    name: "photos",
    href: "/photos",
    icon: <Aperture size={"14"} className="mr-2" />,
  },
];

export { META_THEME_COLORS, NavLinks, SiteConfig, SocialLinks };
