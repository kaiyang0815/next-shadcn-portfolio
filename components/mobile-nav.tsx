"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

import { NavLinks } from "@/app/[locale]/config";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={(open: boolean) => setOpen(open)}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu size={"24"} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerTitle />
      <DrawerContent className="max-h-[60svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            <MobileLink key={"/"} href={"/"} onOpenChange={setOpen}>
              Home
            </MobileLink>
            {NavLinks.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.name}
                  </MobileLink>
                ),
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-base", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
