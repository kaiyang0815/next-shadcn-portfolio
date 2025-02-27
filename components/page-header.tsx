"use client";
import { TextEffect, TextEffectProps } from "@/components/ui/text-effect";
import { TextLoop, TextLoopProps } from "@/components/ui/text-loop";
import { cn } from "@/lib/utils";

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("border-grid border-b", className)} {...props}>
      <div className="container-wrapper">
        <div className="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
          {children}
        </div>
      </div>
    </section>
  );
}

function PageHeaderHeading({ className, children, ...props }: TextLoopProps) {
  return (
    <TextLoop
      className={cn(
        "text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]",
        className,
      )}
      transition={{
        type: "spring",
        stiffness: 900,
        damping: 80,
        mass: 10,
      }}
      variants={{
        initial: {
          y: 20,
          rotateX: 90,
          opacity: 0,
          filter: "blur(4px)",
        },
        animate: {
          y: 0,
          rotateX: 0,
          opacity: 1,
          filter: "blur(0px)",
        },
        exit: {
          y: -20,
          rotateX: -90,
          opacity: 0,
          filter: "blur(4px)",
        },
      }}
      {...props}
    >
      {children}
    </TextLoop>
    // <h1

    //   {...props}
    // />
  );
}

function PageHeaderDescription({
  className,
  children,
  ...props
}: TextEffectProps) {
  return (
    <TextEffect
      per="char"
      preset="fade"
      className={cn(
        "max-w-2xl text-balance text-lg font-light text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </TextEffect>
  );
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start gap-2 pt-2",
        className,
      )}
      {...props}
    />
  );
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
