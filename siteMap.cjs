const sitemap = require('sitemap');
const hostname = 'https://www.example.com';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/projets', changefreq: 'monthly', priority: 0.8 }
  
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());