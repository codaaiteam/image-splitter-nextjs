const { generateSitemap } = require('next-sitemap');
const fs = require('fs');
const path = require('path');

async function generateSitemapFile() {
  // Get all your dynamic routes here
  const pages = [
    '/',
    '/about',
    '/privacy',
    '/terms',
    '/contact',
    '/license',
    '/support',
    '/faq'
  ];

  const sitemapContent = await generateSitemap({
    baseUrl: process.env.SITE_URL || 'https://image-splitter.com',
    pages,
  });

  // Ensure the public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write the sitemap
  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    sitemapContent
  );

  console.log('Sitemap generated successfully!');
}

generateSitemapFile().catch(console.error);
