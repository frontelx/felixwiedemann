# Website of Felix Wiedemann
:Cinematographer

Single page application with static HTML generation to speed up load time and search engine optimization

## Frameworks, tools and technologies

- [Vue.js](https://vuejs.org/) to build reusable components
- [Vue Router](https://router.vuejs.org/) to render different pages within the SPA
- [Webpack](https://webpack.js.org/) as bundler for JS, CSS and HTML templates
- [Prerender SPA Plugin](https://github.com/chrisvfritz/prerender-spa-plugin) to render static HTML for all router
- [Gulp](https://gulpjs.com/) for secondary build tasks such as clean and copy assets
- [Gulp SSH](https://github.com/teambition/gulp-ssh) to deploy the dist folder to the web server
- [HTTP Server](https://github.com/indexzero/http-server) as local Node server to preview changes locally
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) to position the site structure
- [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for changing the site's theme between light and dark mode
- [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) to load a smaller image for mobile and a high resolution image for large screens

## Accessibility

This website contains a [basic a11y optimization](basic accessibility optimization) with semantic HTML areas, headline structure, usage of decorative images and keyboard optimization. It was analyzed for basic a11y errors with [aXe](https://axe-core.org/) and [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) browser extensions.

There is no color contrast or screen reader optimization so this website is not fully acecssible based on the WCAG 2.x guidelines so far. 

## Maintenance

The [content directory](https://github.com/agorilla/felixwiedemann/tree/master/content) contains all editable parts of the website.  
This is mainly done with `JSON` and some `HTML` files for more flexible content.

### Documentation 

The maintenance documentation can be found in the [Wiki](https://github.com/agorilla/felixwiedemann/wiki).
