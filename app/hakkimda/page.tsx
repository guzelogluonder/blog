import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: "Backend geliştiricisi Önder hakkında kısa bilgi.",
};

export default function Hakkimda() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Hakkımda</h1>
      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
        Merhaba! Ben Önder. Backend geliştiricisiyim, Java/Spring ile
        çalışıyorum ve bu blogda öğrendiklerimi paylaşıyorum.
      </p>
    </main>
  );
}