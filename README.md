# Benim Blogum

Next.js ile geliştirilen kişisel blog projesi. Yazılım, teknoloji ve öğrenilen şeyler üzerine yazılar paylaşmak için kullanılıyor.

## Özellikler

- Markdown tabanlı blog yazıları (`content/posts`)
- Yazı listesi, yazı detayı ve etikete göre filtreleme sayfaları
- Hakkımda sayfası
- Kod bloklarında syntax highlighting
- Açık/koyu tema desteği (`prefers-color-scheme`)
- Sayfa başına SEO metadata (dinamik yazı/etiket başlıkları dahil)

## Kullanılan teknolojiler

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) ve [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — Markdown frontmatter'ı ayrıştırmak için
- [remark](https://github.com/remarkjs/remark) / [rehype](https://github.com/rehypejs/rehype) — Markdown içeriğini HTML'e çevirmek için
- [rehype-highlight](https://github.com/rehypejs/rehype-highlight) — kod bloklarını renklendirmek için

## Başlarken

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresinden sonucu görebilirsin.

## Yeni yazı ekleme

`content/posts/` klasörüne yeni bir `.md` dosyası ekleyerek yeni bir blog yazısı oluşturabilirsin.
