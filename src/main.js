import Vue from 'vue';
import App from './app.vue';
import ClipList from './modules/m-clip/m-clip-list.vue';
import TeaserClip from './patterns/p-teaser/p-teaser-clip.vue';

Vue.component('m-clip-list', ClipList);
Vue.component('p-teaser-clip', TeaserClip);

new Vue({
  el: '#app',
  render: h => h(App),
});
