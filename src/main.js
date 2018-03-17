// Vue base
import Vue from 'vue';
import App from './app.vue';

// Vue components
import Intro from './modules/m-intro/m-intro.vue';
import ClipList from './modules/m-clip/m-clip-list.vue';
import TeaserClip from './patterns/p-teaser/p-teaser-clip.vue';
import Navigation from './patterns/p-navigation/p-navigation.vue';

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

// Vue initialization
new Vue({
    el: '#app',

    data: {
        navigation: NavigationData,
    },

    render: h => h(App),
});
