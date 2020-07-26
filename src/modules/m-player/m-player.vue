<template>
    <div class="m-player p-txt-copy" v-if="Object.keys(clip).length">
        <link rel="preconnect" href="https://player.vimeo.com">
        <div class="m-player__video">
            <iframe :src="`https://player.vimeo.com/video/${clip.video}`" frameborder="0"
                    webkitallowfullscreen mozallowfullscreen allowfullscreen class="m-player__iframe"></iframe>
        </div>

        <div class="m-player__txt">
            <h1 class="m-player__title"><strong>{{ clip.title }}</strong> {{ clip.additional }} {{ clip.type }}</h1>
            <p class="m-player__descrip" v-if="clip.director || clip.producer">{{ clip.director }} {{ clip.producer }}</p>
            <p class="m-player__descrip" v-if="clip.actors" v-html="clip.actors"></p>
            <p class="m-player__descrip m-player__descrip--awards" v-if="clip.special" v-html="clip.special"></p>
        </div>

        <div class="m-player__video2" v-if="clip.video2">
            <div class="m-player__video">
                <iframe :src="`https://player.vimeo.com/video/${clip.video2}`" frameborder="0"
                        webkitallowfullscreen mozallowfullscreen allowfullscreen class="m-player__iframe"></iframe>
            </div>

            <div class="m-player__txt" v-if="clip.video2title">
                <p class="m-player__descrip">{{ clip.video2title }}</p>
            </div>
        </div>

        <div class="p-framegrabs" v-if="clip.framegrabs">
            <div class="p-framegrabs__item" v-for="(framegrab, index) in clip.framegrabs">
                <p-img-lazyload
                    :retina-image="framegrab"
                    :image="clip.framegrabsmobile && clip.framegrabsmobile[index] ? clip.framegrabsmobile[index] : framegrab"
                    :ratio="clip.framegrabsratio ? { width: clip.framegrabsratio.width, height: clip.framegrabsratio.height } : {}"
                ></p-img-lazyload>
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
