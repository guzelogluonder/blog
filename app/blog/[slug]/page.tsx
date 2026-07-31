import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
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
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-zinc-500 mb-8">{post.date}</p>
      <article
        className="prose prose-zinc"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}