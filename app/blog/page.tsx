import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Yazılar</h1>

      {posts.length === 0 ? (
        <p className="text-zinc-600">Henüz yazı yok.</p>
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