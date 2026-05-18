const fs = require("fs");
const path = require("path");
const { PORTFOLIO_DATA } = require("../src/constants/portfolio");
const { services } = require("../src/constants/services");

async function generateSitemap() {
  const baseUrl = "https://codethisweb.com";

  // 1. Define Static Routes
  const staticRoutes = ["", "/services", "/projects", "/portfolio"];

  // 2. Map slugs from constants
  const serviceSlugs = services.map((s) => s.slug);
  const projectSlugs = PORTFOLIO_DATA.projects.map((p) => p.slug);

  const allRoutes = [
    ...staticRoutes,
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...projectSlugs.map((slug) => `/projects/${slug}`),
  ];

  // Generate XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === "" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  // Write Sitemap
  const publicPath = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicPath)) fs.mkdirSync(publicPath);

  fs.writeFileSync(path.join(publicPath, "sitemap.xml"), sitemapXml);
  console.log("✅ sitemap.xml generated in /public");

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: ${baseUrl}/sitemap.xml`;

  fs.writeFileSync(path.join(publicPath, "robots.txt"), robotsTxt);
  console.log("✅ robots.txt generated in /public");
}

generateSitemap().catch(console.error);
