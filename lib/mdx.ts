import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface BasePost {
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Insight extends BasePost {
  title: string;
  category: string;
  description: string;
  slug: string;
}

export interface CaseStudy extends BasePost {
  title: string;
  description: string;
  category: string;
  client: string;
  outcome: string;
  slug: string;
}

export interface ServiceFrontmatter extends BasePost {
  title: string;
  description: string;
  imageUrl?: string;
  category?: string;
  tagline?: string;
  id?: string;
  slug: string;
}

export async function getPostBySlug<T extends BasePost>(
  category: "blog" | "case-studies" | "services",
  slug: string,
) {
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
  return { data: data as T, content, slug };
}

export async function getAllPosts<T extends BasePost>(
  category: "blog" | "case-studies" | "services",
): Promise<T[]> {
  const categoryPath = path.join(contentDir, category);
  if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) return [];

  const posts: T[] = [];

  if (category === "services") {
    const entries = fs.readdirSync(categoryPath);
    for (const entry of entries) {
      const entryPath = path.join(categoryPath, entry);
      if (fs.statSync(entryPath).isDirectory()) {
        const files = fs.readdirSync(entryPath);
        for (const file of files) {
          if (file.endsWith(".mdx")) {
            const slug = file.replace(".mdx", "");
            const fullPath = path.join(entryPath, file);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);
            posts.push({ ...data, slug } as unknown as T);
          }
        }
      } else if (entry.endsWith(".mdx")) {
        const slug = entry.replace(".mdx", "");
        const fileContents = fs.readFileSync(entryPath, "utf8");
        const { data } = matter(fileContents);
        posts.push({ ...data, slug } as unknown as T);
      }
    }
  } else {
    const files = fs.readdirSync(categoryPath);
    posts.push(
      ...files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
          const slug = file.replace(".mdx", "");
          const fullPath = path.join(categoryPath, file);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data } = matter(fileContents);
          return { ...data, slug } as unknown as T;
        }),
    );
  }

  return posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
}
