<template>
    <div class="m-player">
        Clip: {{ $route.params.clip }}

        <iframe :src="`https://player.vimeo.com/video/${clip.video}?autoplay=1`" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen class="video-player-content"></iframe>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                clip: {
                    video: '218371926',
                },
            }
        },

        created() {

        }
    }
</script>
