// Vue base
import Vue from 'vue';
import App from './app.vue';

// Vue components
import Intro from './modules/m-intro/m-intro.vue';
import ClipList from './modules/m-clip/m-clip-list.vue';
import TeaserClip from './patterns/p-teaser/p-teaser-clip.vue';

// Polyfills
import 'whatwg-fetch';

/**** Modules ****/
// Intro
Vue.component('m-intro', Intro);

// Clip
Vue.component('m-clip-list', ClipList);
Vue.component('p-teaser-clip', TeaserClip);

new Vue({
  el: '#app',
  render: h => h(App),
});
