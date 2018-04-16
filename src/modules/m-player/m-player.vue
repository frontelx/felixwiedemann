<template>
    <div class="m-player">

        <div class="m-player__video">
            <iframe :src="`https://player.vimeo.com/video/${clip.video}?autoplay=1`" frameborder="0"
                    webkitallowfullscreen mozallowfullscreen allowfullscreen class="m-player__iframe"></iframe>
        </div>

        <div class="m-player__txt p-txt-rte">
            <h2 class="m-player__title">CITY OF TINY LIGHTS / Feature Film - Trailer</h2>
            <p class="m-player__descrp">Dir. Pete Travis / Prod. Rebecca O Brien, Ado Yoshizaki Cassuto / BBC Films, Sixteen Films</p>
            <p class="m-player__descrp">Lorem ipsum dolor sit amet ipsum dolor sit amet.</p>
        </div>

        <ul class="p-framegrabs">
            <li class="p-framegrabs__item">
                <picture>
                    <source :srcset="`/content/clips/films/framegrabs/COTL-16B-1120-srgb.jpg`" media="(min-width: 750px)">
                    <img class="p-img-block" :src="`/content/clips/films/framegrabs/COTL-16B-1120-srgb-mobile.jpg`" alt="" :title="''">
                </picture>
            </li>
            <li class="p-framegrabs__item">
                <picture>
                    <source :srcset="`/content/clips/films/framegrabs/Away-15D-1120-srgb.jpg`" media="(min-width: 750px)">
                    <img class="p-img-block" :src="`/content/clips/films/framegrabs/Away-15D-1120-srgb-mobile.jpg`" alt="" :title="''">
                </picture>
            </li>
        </ul>

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
        created: function () {
            this.$root.theme = 't-dark';
        }
    }
</script>
