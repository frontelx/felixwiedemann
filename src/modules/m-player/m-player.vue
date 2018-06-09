<template>
    <div class="m-player p-txt-copy" v-if="Object.keys(clip).length">
        <div class="m-player__video">
            <iframe :src="`https://player.vimeo.com/video/${clip.video}?autoplay=1&muted=1`" frameborder="0"
                    webkitallowfullscreen mozallowfullscreen allowfullscreen class="m-player__iframe"></iframe>
        </div>

        <div class="m-player__txt">
            <h1 class="m-player__title">{{ clip.title }} {{ clip.additional }}</h1>
            <p class="m-player__descrip" v-if="clip.director">{{ clip.director }}</p>
            <p class="m-player__descrip" v-if="clip.producer" v-html="clip.producer"></p>
            <p class="m-player__descrip" v-if="clip.actors" v-html="clip.actors"></p>
            <p class="m-player__descrip m-player__descrip--awards" v-if="clip.special" v-html="clip.special"></p>
        </div>

        <div class="p-framegrabs" v-if="clip.framegrabs">
            <div class="p-framegrabs__item" v-for="(framegrab, index) in clip.framegrabs">
                <picture>
                    <source :srcset="framegrab" :media="`(min-width: ${$root.breakpoints.tablet})`">
                    <img class="p-img-block" :src="framegrab" alt="">
                </picture>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                clip: {},
            }
        },

        methods: {
            getClip(clips) {
                this.clip = clips.find(clip => clip.route === this.$route.params.clip);
            }
        },

        created: function () {
            this.$root.theme = 't-dark';

            if (this.$parent.clips.length) {
                this.getClip(this.$parent.clips);
            } else {
                this.$parent.$on('clipsFetched', this.getClip);
            }
        },
    }
</script>
