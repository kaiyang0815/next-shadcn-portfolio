"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLinks, SiteConfig } from "@/app/config";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <span className="hidden items-center justify-center font-bold md:flex">
          <Image
            src="/logo.png"
            width={"16"}
            height={"16"}
            alt="logo"
            className="mr-2 rounded-sm"
          />
          {SiteConfig.siteName}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {NavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center justify-center transition-colors hover:text-stone-700 dark:hover:text-stone-100",
              pathname?.startsWith(link.href)
                ? "text-stone-900 dark:text-stone-200"
                : "text-stone-600 dark:text-stone-400"
            )}
          >
            {link.icon && link.icon}
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
