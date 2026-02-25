import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface BasePost {
  date?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Insight extends BasePost {
  title: string;
  category: string;
  description: string;
  slug: string;
  date: string; // Required for Insights
}

export interface CaseStudy extends BasePost {
  title: string;
  description: string;
  category: string;
  client: string;
  outcome: string;
  slug: string;
  date: string; // Required for CaseStudies
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

  // Ensure slug is always included in data for type consistency
  const postData = { ...data, slug } as unknown as T;

  return { data: postData, content, slug };
}

export async function getAllPosts<T extends BasePost>(
  category: "blog" | "case-studies" | "services",
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
        posts.push({ ...data, slug } as unknown as T);
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
        posts.push({ ...data, slug } as unknown as T);
      }
    }
  }

  return posts.sort((a, b) => {
    // If date exists, sort by date descending
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    // Fallback for posts without dates (like services) - alphabetical by slug or title
    const valA = a.title || a.slug || "";
    const valB = b.title || b.slug || "";
    return valA.localeCompare(valB);
  });
}
