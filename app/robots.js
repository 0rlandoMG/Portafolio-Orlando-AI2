export default function robots() {
  const siteUrl = "https://orlandomarrero.dev"; // TODO: replace with your real deployed domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
