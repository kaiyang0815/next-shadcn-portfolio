import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "path";

type Metadata = {
  title: string;
  draft: boolean;
  createdAt: Date;
  publishedAt?: Date;
  description: string;
  featured: boolean;
  tags: string[];
};

export type Post = {
  metadata: Metadata;
  slug: string;
  content: string;
};

function getMDXFileList(dir: string, locale: string = "en"): string[] {
  if (!fs.existsSync(dir)) {
    notFound();
  }
  return fs.readdirSync(dir).filter((file) => file.endsWith(locale + ".mdx"));
}

function readMDXFile(dir: string, fileName: string) {
  const filePath = path.join(dir, fileName);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    draft: Boolean(data.draft),
    createdAt: data.createdAt || new Date(),
    publishedAt: data.publishedAt || new Date(),
    description: data.description || "",
    featured: Boolean(data.featured),
    tags: data.tags || [],
  };
  return { metadata, content };
}

function getMDXData(dir: string): Post[] {
  const fileList = getMDXFileList(dir);
  // console.log('\nCollected files:', fileList);

  return fileList.map((file) => {
    const { metadata, content } = readMDXFile(dir, file);
    const slug = path.basename(file, path.extname(file)).slice(0, -3);
    console.log("🚀 ~ returnfileList.map ~ slug:", slug);

    return {
      metadata,
      slug,
      content,
    };
  });
}

function getContent(customPath: string[]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}

export { getContent, getMDXFileList };

// console.log(
//   "🚀 ~ getMDXFileList:",
//   getMDXFileList(path.join("content", "projects")),
// );
getMDXFileList(path.join("content", "projects"));
