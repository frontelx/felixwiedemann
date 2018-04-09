// Vue base
import Vue from 'vue';
import App from './app.vue';

// Vue components

// Patterns
import TeaserClip from './patterns/p-teaser/p-teaser-clip.vue';
Vue.component('p-teaser-clip', TeaserClip);

import Navigation from './patterns/p-navigation/p-navigation.vue';
Vue.component('p-navigation', Navigation);

// Modules
import Intro from './modules/m-intro/m-intro.vue';
Vue.component('m-intro', Intro);

import Clips from './modules/m-clips/m-clips.vue';
Vue.component('m-clips', Clips);

import TxtTeaser from './modules/m-txt-teaser/m-txt-teaser.vue';
Vue.component('m-txt-teaser', TxtTeaser);

// Header
import Header from './modules/m-header/m-header.vue';

// Player
import Player from './modules/m-player/m-player.vue';

// Global data
import TitleData from '../content/title.json';
import NavigationData from '../content/navigation.json';

// Global services
const Services = require('./generic/services');

// Polyfills
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

// Vue Router
import VueRouter from 'vue-router';

const appRoutes = Services.getAppRoutes();

const routes = appRoutes.map(function (route, index) {
    const isIndex = route === '/';
    const hasPlayer = isIndex ? false : NavigationData[index - 1].player;
    const Component = require(`./pages${isIndex ? '/index' : route}.vue`);
    const title = `${TitleData[0].name} | ${TitleData[0].title}${ isIndex ? '' : ` : ${NavigationData[index - 1].title}`}`;

    return {
        path: route,

        components: {
            header: isIndex ? '' : Header,
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
        },
    }
});

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

Vue.use(VueRouter);

// Vue initialization
new Vue({
    el: '#app',
    router,
    data: {
        title: TitleData[0],
        navigation: NavigationData,
    },
    methods: {
        seoUrl: Services.seoUrl
    },

    render: h => h(App),
});
