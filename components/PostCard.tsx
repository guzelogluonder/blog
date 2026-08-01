import Link from "next/link";
import { PostMeta } from "@/lib/posts";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <li className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500 transition-shadow duration-200">
      <Link
        href={`/blog/${post.slug}`}
        className="text-xl font-semibold hover:text-indigo-600 hover:underline"
      >
        {post.title}
      </Link>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{post.date}</p>
      <p className="text-zinc-600 dark:text-zinc-300 mt-2">{post.excerpt}</p>
      {post.tags.length > 0 && (
        <div className="flex gap-2 mt-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-300 dark:hover:bg-indigo-900"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}