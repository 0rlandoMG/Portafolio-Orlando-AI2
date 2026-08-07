export default function robots() {
  const siteUrl = "https://orlandomarrero-dev.vercel.app"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
