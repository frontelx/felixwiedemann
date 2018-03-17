<template>
    <div class="m-intro">

        <picture v-if="currentImage">
            <source :srcset="`/content/intro/images/${currentImage}.jpg`" media="(min-width: 750px)">
            <img class="m-intro__img" :src="`/content/intro/images/${currentImage}-mobile.jpg`" alt="" title="">
        </picture>

        <div class="m-intro__txt-wp">
            <h1 class="m-intro__headline">FELIX WIEDEMANN <span class="m-intro__interheadline">BSC</span> CINEMATOGRAPHER</h1>

            <p-navigation></p-navigation>
        </div>


    </div>
</template>

<script>
    export default {
        props: {
            imageData: {
                type: String,
                required: true,
            },
        },

        data() {
            return {
                images: [],
                currentImage: null,
                nextImage: null,
            }
        },

        created() {
            this.getImages();
        },

        methods: {
            getImages() {
                fetch(this.imageData)
                    .then(response => response.json())
                    .then(data => {
                        this.images = this.randomizeImages(data);
                        this.currentImage = this.images[0].image;
                    });
            },

            randomizeImages(images) {
                return images
                    .map(a => [Math.random(), a])
                    .sort((a, b) => a[0] - b[0])
                    .map(a => a[1]);
            }
        },
    }
</script>
