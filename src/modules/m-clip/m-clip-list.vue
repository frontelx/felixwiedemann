<template>
    <div class="m-clip-list">
        <p-teaser-clip
            v-for="(clip, index) in clips"
            :key="clip.id"
            :title="clip.title"
            :description="clip.subtitle"
            :image="clip.image"
            :addClass="'m-clip-list__item'"
        >
        </p-teaser-clip>
    </div>
</template>


<script>
    export default {
        props: {
            jsonUrl: {
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
                fetch(this.jsonUrl)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (json) {
                        this.clips = json;
                        console.log('clips', this.clips);
                    }.bind(this))
                    .catch(function(error) {
                        console.log('No clips found', error);
                    });
            }
        },
    }
</script>
