<template>
    <div class="m-player p-txt-copy" v-if="Object.keys(clip).length">
        <div class="m-player__back">
            <router-link :to="backUrl">« back</router-link>
        </div>

        <div class="m-player__video">
            <iframe :src="`https://player.vimeo.com/video/${clip.video}?autoplay=1`" frameborder="0"
                    webkitallowfullscreen mozallowfullscreen allowfullscreen class="m-player__iframe"></iframe>
        </div>

        <div class="m-player__txt">
            <h2 class="m-player__title">{{ clip.title }} {{ clip.additional }}</h2>
            <p class="m-player__descrp" v-if="clip.subtitle">{{ clip.subtitle }}</p>
        </div>

        <ul class="p-framegrabs" v-if="clip.framegrabs">
            <li class="p-framegrabs__item" v-for="(framegrab, index) in clip.framegrabs">
                <picture>
                    <source :srcset="framegrab" :media="`(min-width: ${$root.breakpoints.tablet})`">
                    <img class="p-img-block" :src="framegrab" :alt="`${clip.title} framegrab ${index + 1}`">
                </picture>
            </li>
        </ul>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                clip: {},
                backUrl: `/${this.$route.path.split('/')[1]}/` // returns parent paage, e.g. '/films/'
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
