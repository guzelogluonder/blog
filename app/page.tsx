import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Merhaba, ben <span className="text-indigo-600">Önder</span>
      </h1>
      <p className="text-lg text-zinc-600 max-w-xl mb-8">
        Bu benim kişisel blogum. Burada yazılım, teknoloji ve öğrendiğim
        şeyler hakkında yazılar paylaşacağım.
      </p>
      <Link
        href="/blog"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
      >
        Yazılarımı Oku
      </Link>
    </main>
  );
}
