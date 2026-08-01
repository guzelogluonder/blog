export default function Footer() {
  return (
    <footer className="border-t px-6 py-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
      © {new Date().getFullYear()} önder — Tüm hakları saklıdır.
    </footer>
  );
}