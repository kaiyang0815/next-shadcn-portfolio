import { cancel, confirm, isCancel, log, select, text } from "@clack/prompts";
import { writeFileSync } from "fs";
import matter from "gray-matter";
import path from "path";

type MatterData = {
  title: string;
  createdAt: Date;
  draft: boolean;
  publishedAt?: Date;
  description: string;
  featured: boolean;
  tags: string[];
};

async function selectPostCategory() {
  const postCategory = await select({
    message: "Category:",
    options: [
      { value: "notes", label: "Note" },
      { value: "tutorials", label: "Tutorial" },
    ],
  });
  const psotLang = await select({
    message: "Language:",
    options: [
      { value: "zh", label: "Chinese" },
      { value: "en", label: "English" },
    ],
  });
  const postSlug = await text({
    message: "Slug:",
    placeholder: "example",
    validate(value) {
      if (value.length === 0) return `Value is required!`;
    },
  });
  const postTitle = await text({
    message: "Title:",
    placeholder: "Title",
    validate(value) {
      if (value.length === 0) return `Value is required!`;
    },
  });
  const postDesc = await text({
    message: "Description:",
    placeholder: "",
    validate(value) {
      if (value.length === 0) return `Value is required!`;
    },
  });
  const postDraft = await confirm({
    message: "Draft?",
  });
  const postFeatured = await confirm({
    message: "Featured?",
  });
  const postTags = (await text({
    message: "Tags:",
    placeholder: "tag1, tag2",
    validate(value) {
      if (value.length === 0) return `Value is required!`;
    },
  })) as string;
  const dir = path.join(
    "content",
    "posts",
    postCategory as string,
    `${postSlug as string}.${psotLang as string}.mdx`,
  );

  if (isCancel(postCategory)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  if (isCancel(postTitle)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  const matterData: MatterData = {
    title: postTitle as string,
    createdAt: new Date(),
    draft: postDraft as boolean,
    description: postDesc as string,
    featured: postFeatured as boolean,
    tags: postTags.split(",").map((tag) => tag.trim()),
  };
  if (!postDraft) {
    matterData.publishedAt = new Date();
  }

  const frontMatter = matter.stringify("", matterData);
  log.success("Success!");
  log.message(frontMatter);
  writeFileSync(dir, frontMatter);
}
selectPostCategory();
