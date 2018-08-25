// Helper functions
const fs = require('fs');

module.exports = {

    // Returns true if route detects the index page
    detectIndex(route) {
        return route.path === '/';
    },

    // Returns true if route detects the player view
    detectPlayer(route) {
        return route.params.clip ? true : false;
    },

    // Returns all routes
    getAllRoutes() {
        const appRoutes = this.getAppRoutes();
        const clipRoutes = this.getClipRoutes();

        return appRoutes.concat(clipRoutes).sort();
    },

    // Returns the navigation routes for the app
    getAppRoutes() {
        const navigationData = require('../../content/navigation.json');
        const appRoutes = navigationData.map(item => item.route);

        // Add index route
        appRoutes.unshift('/');

        return appRoutes;
    },

    // Returns the clip routes
    getClipRoutes() {
        const navigationData = require('../../content/navigation.json');
        let clipRoutes = [];

        navigationData.forEach(item => {
            if (item.clips) {
                const clipsData = `./content${item.route}${item.clips}`;

                if (fs.existsSync(clipsData)) {
                    const clips = require(`../.${clipsData}`);
                    const routes = clips.map(clip => `${item.route}${this.seoUrl(clip.title)}/`);

                    clipRoutes = clipRoutes.concat(routes);
                }
            }
        });

        return clipRoutes;
    },

    // Returns the configration of the current page
    // Configuration is edited in /content/navigation.json
    getPageConfigByRoute(route, navigation) {
        return navigation.find(page => page.route === route);
    },

    // Update vertical scroll position
    getScrollPos() {
        return window.scrollY;
    },

    // Returns breakpoints object from config file
    getBreakpoints() {
        const breakpointsData = require('../config/breakpoints.json');

        return breakpointsData.breakpoints;
    },

    // Convert string to SEO friendly url
    // All lower case letters and replaces white space with "-"
    seoUrl(string) {
        const url = string
            .toLowerCase()
            .replace(/ - /g, '-')
            .replace(/ /g, '-')
            .replace(/\(/g, '')
            .replace(/\)/g, '')
            .replace(/\'/g, '')
            .replace(/\./g, '')
            .replace(/\./g, '');

        // All other special chars will be encoded
        return encodeURI(url);
    },

    // Vue router scroll behavior
    // https://router.vuejs.org/guide/advanced/scroll-behavior.html
    scrollBehavior(to, from) {
        const scrolling = { x: 0, y: 0 };

        if (global.savedScrollPos > 0) {
            const isScrollBack = from.path.startsWith(to.path);

            if (global.scrollBack && isScrollBack) {
               scrolling.y = global.savedScrollPos;

                // Reset scroll position again for next route
                global.savedScrollPos = 0;
                global.scrollBack = false;
            } else {
                global.scrollBack = true;
            }
        }

        return scrolling;
    },

    // Shuffle array items to get a randomized order
    // https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
    shuffleArray(array) {
        return array
            .map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);
    }

};
