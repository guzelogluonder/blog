import type { Metadata } from "next";
import { getPostsByTag } from "@/lib/posts";
import PostCard from "@/components/PostCard";

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `#${tag} etiketi`,
    description: `${tag} etiketine sahip blog yazıları.`,
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">
        Etiket: <span className="text-zinc-500 dark:text-zinc-400">{tag}</span>
      </h1>

      {posts.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-300">Bu etikete sahip yazı bulunamadı.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </ul>
      )}
    </main>
  );
}