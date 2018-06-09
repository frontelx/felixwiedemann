// Helper functions

module.exports = {

    // Returns true if route detects the index page
    detectIndex(route) {
        return route.path === '/';
    },

    // Returns all routes for the app
    getAppRoutes() {
        const navigationData = require('../../content/navigation.json');
        const appRoutes = navigationData.map(item => item.route);

        // Add index route
        appRoutes.unshift('/');

        return appRoutes;
    },

    // Returns the configration of the current page
    // Configuration is edited in /content/navigation.json
    getPageConfigByRoute(route, navigation) {
        return navigation.find(page => page.route === route);
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
            .replace(/ /g, '-');

        // All other special chars will be encoded
        return encodeURI(url);
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
