// Vue base
import Vue from 'vue';
import App from './app.vue';

// Vue components

// Patterns
import TeaserClip from './patterns/p-teaser/p-teaser-clip.vue';
Vue.component('p-teaser-clip', TeaserClip);

import Navigation from './patterns/p-navigation/p-navigation.vue';
Vue.component('p-navigation', Navigation);

import LazyloadImage from './patterns/p-img/p-img-lazyload.vue';
Vue.component('p-img-lazyload', LazyloadImage);

// Modules
import Intro from './modules/m-intro/m-intro.vue';
Vue.component('m-intro', Intro);

import Clips from './modules/m-clips/m-clips.vue';
Vue.component('m-clips', Clips);

import Txt from './modules/m-txt/m-txt.vue';
Vue.component('m-txt', Txt);

// Header
import Header from './modules/m-header/m-header.vue';

// Player
import Player from './modules/m-player/m-player.vue';

// Global data
import TitleData from '../content/title.json';
import NavigationData from '../content/navigation.json';
import Settings from '../content/settings.json';

// Global services
const Services = require('./generic/services');

// Polyfills
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

// Configuration of Lazysizes plugin
// https://github.com/aFarkas/lazysizes#js-api
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.expand = Settings.lazyloadTreshold;

// Vue Router
import VueRouter from 'vue-router';

const appRoutes = Services.getAppRoutes();

const routes = appRoutes.map(function (route, index) {
    const isIndex = route === '/';
    const navigationItem = NavigationData[index - 1];
    const hasPlayer = isIndex ? false : navigationItem.hasOwnProperty('clips');
    const Component = require(`./pages/${isIndex ? 'index.vue' : navigationItem.view}`);
    const title = `${TitleData.pageTitle}${ isIndex ? '' : `${TitleData.pageTitleDivider}${navigationItem.title}`}`;
    const description = isIndex ? TitleData.seoDescription : false;

    return {
        path: route,

        components: {
            header: Header,
            main: Component.default,
        },

        children: hasPlayer ? [
            {
                path: ':clip',
                components: {
                    player: Player,
                },
                meta: {
                    title: title,
                },
            }
        ] : [],

        meta: {
            title: title,
            description: description,
        },
    }
});

routes.push({
    path: '*',
    redirect: '/',
});

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior: Services.scrollBehavior,
});

// Add meta title and description by  route
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    const description = document.querySelector('meta[name="description"]');

    if (to.meta.description && !description) {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = to.meta.description;
        document.head.appendChild(meta);
    } else if (!to.meta.description && description) {
        if (Element.prototype.hasOwnProperty('remove')) {
            description.remove();
        } else {
            // Polyfill for IE 11
            // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove#Browser_compatibility
            description.parentNode.removeChild(description);
        }
    }

    next();
});

Vue.use(VueRouter);

// Vue initialization
new Vue({
    el: '#app',
    router,
    data: {
        title: TitleData,
        navigation: NavigationData,
        breakpoints: Services.getBreakpoints(),
        theme: 't-dark',
        bgImg: '',
        isIndex: true,
        isPlayer: false,
    },
    watch: {
        $route (to, from){
            // Detect if on index page
            this.isIndex = Services.detectIndex(this.$route);
            this.isPlayer = Services.detectPlayer(this.$route);
        }
    },
    methods: {
        seoUrl: Services.seoUrl,
        getPageConfigByRoute: Services.getPageConfigByRoute,

        saveScrollPos() {
            global.savedScrollPos = Services.getScrollPos();
            global.scrollBack = false;
        }
    },
    created() {
        this.isIndex = Services.detectIndex(this.$route);
        this.isPlayer = Services.detectPlayer(this.$route);
    },

    render: h => h(App),
});
