export default function sitemap() {
  const siteUrl = "https://orlandomarrero-dev.vercel.app"

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
