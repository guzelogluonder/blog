export default function Header() {
  return (
    <header className="border-b px-6 py-4 flex items-center justify-between">
      <a href="/" className="text-xl font-bold">
        Önder
      </a>
      <nav className="flex gap-4 text-sm">
        <a href="/" className="hover:text-indigo-600 hover:underline">Ana Sayfa</a>
        <a href="/blog" className="hover:text-indigo-600 hover:underline">Blog</a>
        <a href="/hakkimda" className="hover:text-indigo-600 hover:underline">Hakkımda</a>
      </nav>
    </header>
  );
}