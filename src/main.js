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

import ClipList from './modules/m-clip/m-clip-list.vue';
Vue.component('m-clip-list', ClipList);

// Header
import Header from './modules/m-header/m-header.vue';

// Navigation
import NavigationData from '../content/navigation.json';

// Services
const Services = require('./generic/services');

// Polyfills
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

// Vue Router
import VueRouter from 'vue-router';
const appRoutes = Services.getAppRoutes();

const routes = appRoutes.map(function(route) {
    const isIndex = route === '/';
    const Component = require(`./pages${isIndex ? '/index' : route}.vue`);

    return {
        path: route,
        components: {
            header: isIndex ? '' : Header,
            main: Component.default,
        },
        meta: {
            title: 'Felix Wiedemann',
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
        navigation: NavigationData,
    },

    render: h => h(App),
});
