// Vue base
import Vue from 'vue';
import App from './app.vue';

// Vue component import

// Pattern
import TeaserClip from './patterns/p-teaser/p-teaser-clip.vue';
import Navigation from './patterns/p-navigation/p-navigation.vue';

// Modules
import Intro from './modules/m-intro/m-intro.vue';
import ClipList from './modules/m-clip/m-clip-list.vue';
import Header from './modules/m-header/m-header.vue';

// Pages
import Index from './pages/Index.vue';
import Films from './pages/films.vue';

// Polyfills
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

// Vue component initialization

// Intro
Vue.component('m-intro', Intro);

// Clip
Vue.component('m-clip-list', ClipList);
Vue.component('p-teaser-clip', TeaserClip);

// Navigation
import NavigationData from '../content/navigation.json';
Vue.component('p-navigation', Navigation);

// Vue Router
import VueRouter from 'vue-router';
const routes = [
    {
        path: '/',
        components: {
            main: Index,
        },
        meta: {
            title: 'Felix Wiedemann',
        },
    },
    {
        path: '/films',
        components: {
            header: Header,
            main: Films,
        },
        meta: {
            title: 'Films',
        },
    },
];

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
