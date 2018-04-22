<template>
    <div class="m-intro">

        <picture>
            <source :srcset="currentImage" media="(min-width: 750px)">
            <img
                :src="currentImage"
                class="m-intro__img"
                alt="">
        </picture>

        <picture v-if="this.images.length > 1">
            <source :srcset="nextImage" media="(min-width: 750px)">
            <img
                :src="nextImage"
                :style="`
                    transition-property: ${nextImageTransitionProperty};
                    transition-duration: ${transitionDuration}s;
                    opacity: ${nextImageOpacity}`"
                class="m-intro__img m-intro__img--next"
                alt=""
                @transitionend="triggerImageChange()">
        </picture>

        <picture v-if="!this.hasPreloaded">
            <source :srcset="preloadImage" media="(min-width: 750px)">
            <img
                :src="preloadImage"
                class="m-intro__img m-intro__img--preload"
                alt="">
        </picture>

        <div class="m-intro__txt-wp">
            <h1 class="m-intro__headline">{{ $root.title.name }} <span class="m-intro__interheadline">{{ $root.title.additional }}</span> {{ $root.title.title }}</h1>

            <p-navigation></p-navigation>
        </div>


    </div>
</template>

<script>
    import imagesData from '../../../content/intro/images.json';
    import Services from '../../generic/services';

    export default {

        props: {
            transitionDelay: {
                type: Number,
                default: 3,
            },
            transitionDuration: {
                type: Number,
                default: 3,
            },
            transitionProperty: {
                type: String,
                default: 'opacity',
            },
        },

        data() {
            return {
                images: Services.shuffleArray(imagesData),
                imageCounter: 0,
                currentImage: '',
                nextImage: '',
                nextImageOpacity: 0,
                nextImageTransitionProperty: this.transitionProperty,
                preloadImage: '',
                hasPreloaded: false,
            }
        },

        created() {
            if (this.images.length > 0) {
                this.changeImage();
            }

        },

        mounted() {
            // Triggers first image transition
            this.startTransition();
        },

        methods: {
            triggerImageChange() {
                this.stopTransition();
                this.changeOpacity(0);
                this.changeImage();
                this.startTransition();
            },

            changeImage() {
                // Set next image to current image after transition end
                this.currentImage = this.images[this.imageCounter].image;

                // Update image counter to next image or first image if no more available
                this.imageCounter = this.imageCounter < this.images.length - 1 ? this.imageCounter + 1 : 0;
                this.nextImage = this.images[this.imageCounter].image;

                // Set next image to preload or remove preloading if no more images available
                if (!this.hasPreloaded && this.imageCounter + 1 < this.images.length) {
                   this.preloadImage = this.images[this.imageCounter + 1].image;
                } else {
                    this.hasPreloaded = true;
                }
            },

            changeOpacity(value) {
                setTimeout(() => {
                    this.nextImageOpacity = value;
                }, 1);
            },

            stopTransition() {
                this.nextImageTransitionProperty = 'none';
            },

            startTransition() {
                setTimeout(() => {
                    this.nextImageTransitionProperty = this.transitionProperty;
                    this.changeOpacity(1);
                }, this.transitionDelay * 1000);
            },
        },
    }
</script>
