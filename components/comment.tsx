"use client";

import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="kaiyang0815/next-shadcn-portfolio"
      repoId="R_kgDON-XpwA"
      category="Announcements"
      categoryId="DIC_kwDON-XpwM4CnYsh"
      mapping="pathname"
      term="Welcome to Mizar!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}
