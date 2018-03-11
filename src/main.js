import Vue from 'vue';
import App from './app.vue';
import TeaserClip from './patterns/p-teaser/p-teaser-clip.vue';

Vue.component('p-teaser-clip', TeaserClip);

new Vue({
  el: '#app',
  render: h => h(App),
});
