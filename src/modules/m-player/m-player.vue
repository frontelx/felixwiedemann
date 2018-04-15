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

    </div>

    <!--<ul class="framegrabs">
        <li class="framegrabs__item">
            <picture>
                <source :srcset="`/content/clips/${clip.image}.jpg`" media="(min-width: 750px)">
                <img class="p-img-block" :src="`/content/clips/${clip.image}-mobile.jpg`" alt="" :title="clip.title">
            </picture>
        </li>
    </ul>-->
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
