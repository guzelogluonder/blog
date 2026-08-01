import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const postMeta = getAllPosts().find((post) => post.slug === slug);

  if (!postMeta) {
    return { title: "Yazı bulunamadı" };
  }

  return {
    title: postMeta.title,
    description: postMeta.excerpt,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  const posts = getAllPosts();
  const postExists = posts.some((post) => post.slug === slug);

  if (!postExists) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 hover:underline">
        ← Tüm yazılar
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">{post.date}</p>
      <article
        className="prose prose-zinc dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}