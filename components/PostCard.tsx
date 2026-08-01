import Link from "next/link";
import { PostMeta } from "@/lib/posts";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <li className="border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-shadow duration-200">
      <Link
        href={`/blog/${post.slug}`}
        className="text-xl font-semibold hover:text-indigo-600 hover:underline"
      >
        {post.title}
      </Link>
      <p className="text-sm text-zinc-500 mt-1">{post.date}</p>
      <p className="text-zinc-600 mt-2">{post.excerpt}</p>
      {post.tags.length > 0 && (
        <div className="flex gap-2 mt-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full hover:bg-indigo-100"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}