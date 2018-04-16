<template>
    <div class="m-clips">
        <div class="m-clips__list" v-if="!$route.params.clip">
            <p-teaser-clip
                v-for="(clip, index) in clips"
                :key="clip.id"
                :clip="clip"
                :addClass="'m-clips__list-item'"
            >
            </p-teaser-clip>
        </div>

        <router-view name="player"></router-view>
    </div>
</template>


<script>
    export default {
        props: {
            clipsData: {
                type: String,
                required: true,
            },
        },

        data() {
            return {
                clips: [],
            }
        },

        created() {
            this.getClips();
        },

        methods: {
            getClips() {
                fetch(this.clipsData)
                    .then(response => response.json())
                    .then(data => this.clips = data.map((clip) => {
                        clip.route = this.$root.seoUrl(clip.title);
                        return clip;
                    }))
                    .catch(error => console.log('No clips found', error));
            }
        },
    }
</script>
