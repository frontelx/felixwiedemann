<template>
    <div class="m-intro">
        <router-link :to="`${$root.navigation[0].route}`">
            <picture>
                <source :srcset="currentImage" :media="`(min-width: ${$root.breakpoints.tablet})`">
                <img
                    :src="currentImageMobile"
                    class="m-intro__img"
                    alt="">
            </picture>

            <picture v-if="this.images.length > 1">
                <source :srcset="nextImage" :media="`(min-width: ${$root.breakpoints.tablet})`">
                <img
                    :src="nextImageMobile"
                    :style="`
                        transition-property: ${nextImageTransitionProperty};
                        transition-duration: ${transitionDuration}s;
                        opacity: ${nextImageOpacity}`"
                    class="m-intro__img m-intro__img--next"
                    alt=""
                    @transitionend="triggerImageChange()">
            </picture>

            <picture v-if="!this.hasPreloaded">
                <source :srcset="preloadImage" :media="`(min-width: ${$root.breakpoints.tablet})`">
                <img
                    :src="preloadImageMobile"
                    class="m-intro__img m-intro__img--preload"
                    alt="">
            </picture>
        </router-link>

    </div>
</template>

<script>
    import IntroData from '../../../content/intro/intro.json';
    import Services from '../../generic/services';

    const imagesData = IntroData.images;

    export default {

        props: {
            transitionDelay: {
                type: Number,
                default: IntroData.transitionDelay,
            },
            transitionDuration: {
                type: Number,
                default: IntroData.transitionDuration,
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
                this.currentImageMobile =
                    this.images[this.imageCounter].imagemobile ?
                        this.images[this.imageCounter].imagemobile :
                        this.images[this.imageCounter].image;

                // Update image counter to next image or first image if no more available
                this.imageCounter = this.imageCounter < this.images.length - 1 ? this.imageCounter + 1 : 0;

                this.nextImage = this.images[this.imageCounter].image;
                this.nextImageMobile =
                    this.images[this.imageCounter].imagemobile ?
                        this.images[this.imageCounter].imagemobile :
                        this.images[this.imageCounter].image;

                // Set next image to preload or remove preloading if no more images available
                if (!this.hasPreloaded && this.imageCounter + 1 < this.images.length) {
                   this.preloadImage = this.images[this.imageCounter + 1].image;
                   this.preloadImageMobile =
                       this.images[this.imageCounter + 1].imagemobile ?
                           this.images[this.imageCounter + 1].imagemobile :
                           this.images[this.imageCounter + 1].image;
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
