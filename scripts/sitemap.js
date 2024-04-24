const sm = require('sitemap');
const fs = require('fs');
const Services = require('../src/generic/services');
const routes = Services.getAllRoutes();

const sitemap = sm.createSitemap({
    hostname: 'https://www.felixwiedemann.com',
});

routes.forEach(route => {
    sitemap.add({ url: route });
});

fs.writeFileSync('dist/sitemap.xml', sitemap.toString());
