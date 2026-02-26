import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

/**
 * @TYPE_SYSTEM: Discriminated Unions for Industrial Grade Content
 */
export type ContentCategory = "blog" | "case-studies" | "services";

export interface BaseFrontmatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
}

export interface BlogFrontmatter extends BaseFrontmatter {
  category: string;
}

export interface CaseStudyFrontmatter extends BaseFrontmatter {
  category: string;
  client: string;
  outcome: string;
}

export interface ServiceFrontmatter extends BaseFrontmatter {
  id: string;
  category: "FINANCIAL" | "IMMIGRATION" | "DOCUMENTATION" | "SYSTEMS" | "INFRASTRUCTURE";
  tagline: string;
  imageUrl?: string;
  feeEstimate?: string;
  timeline?: string;
  protocol?: Array<{ title: string; description: string }>;
}

export type PostFrontmatter = BlogFrontmatter | CaseStudyFrontmatter | ServiceFrontmatter;

export interface PostResult<T extends PostFrontmatter> {
  data: T;
  content: string;
  slug: string;
}

export async function getPostBySlug<T extends PostFrontmatter>(
  category: ContentCategory,
  slug: string,
): Promise<PostResult<T> | null> {
  let fullPath = "";
  if (category === "services") {
    const servicesPath = path.join(contentDir, "services");
    if (fs.existsSync(servicesPath)) {
      // 1. First check if it's in the root of services
      const rootPath = path.join(servicesPath, `${slug}.mdx`);
      if (fs.existsSync(rootPath)) {
        fullPath = rootPath;
      } else {
        // 2. Then check in subdirectories
        const entries = fs.readdirSync(servicesPath);
        for (const entry of entries) {
          const subdirPath = path.join(servicesPath, entry);
          if (fs.statSync(subdirPath).isDirectory()) {
            const potentialPath = path.join(subdirPath, `${slug}.mdx`);
            if (fs.existsSync(potentialPath)) {
              fullPath = potentialPath;
              break;
            }
          }
        }
      }
    }
  } else {
    fullPath = path.join(contentDir, category, `${slug}.mdx`);
  }

  if (!fullPath || !fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Strict Validation & Mapping
  const postData = {
    ...data,
    slug,
    // Ensure critical fields exist
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "เจ้าป่า",
    image: data.image || data.imageUrl || "/assets/blog/blog-exec-docs.webp",
  } as T;

  return { data: postData, content, slug };
}

export async function getAllPosts<T extends PostFrontmatter>(
  category: ContentCategory,
): Promise<T[]> {
  const categoryPath = path.join(contentDir, category);
  if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) return [];

  const posts: T[] = [];

  function scanDir(dir: string) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.endsWith(".mdx")) {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        const slug = entry.replace(".mdx", "");
        posts.push({
          ...data,
          slug,
          title: data.title || "Untitled",
          description: data.description || "",
          date: data.date || new Date().toISOString(),
          author: data.author || "เจ้าป่า",
          image: data.image || data.imageUrl || "/assets/blog/blog-exec-docs.webp",
        } as T);
      }
    }
  }

  if (category === "services") {
    scanDir(categoryPath);
  } else {
    const files = fs.readdirSync(categoryPath);
    for (const file of files) {
      if (file.endsWith(".mdx")) {
        const fullPath = path.join(categoryPath, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        const slug = file.replace(".mdx", "");
        posts.push({
          ...data,
          slug,
          title: data.title || "Untitled",
          description: data.description || "",
          date: data.date || new Date().toISOString(),
          author: data.author || "เจ้าป่า",
          image: data.image || data.imageUrl || "/assets/blog/blog-exec-docs.webp",
        } as T);
      }
    }
  }

  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
