// Helper functions

module.exports = {

    getAppRoutes() {
        const navigationData = require('../../content/navigation.json');
        const appRoutes = navigationData.map(item => item.route);

        // Add index route
        appRoutes.unshift('/');

        return appRoutes;
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
