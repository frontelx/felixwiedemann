<template>
    <div class="m-intro">

        <picture>
            <source :srcset="`/content/intro/images/${currentImage}.jpg`" media="(min-width: 750px)">
            <img class="m-intro__img" :src="`/content/intro/images/${currentImage}-mobile.jpg`" alt="" title="">
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

    // Randomizes image order
    const shuffledImages = Services.shuffleArray(imagesData);

    export default {
        data() {
            return {
                images: shuffledImages,
                currentImage: shuffledImages[0].image,
                nextImage: shuffledImages[1].image,
            }
        },
    }
</script>
