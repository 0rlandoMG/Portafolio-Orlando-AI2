export default function sitemap() {
  const siteUrl = "https://orlandomarrero.dev"; // TODO: replace with your real deployed domain

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
