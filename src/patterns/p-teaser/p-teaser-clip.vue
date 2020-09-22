<template>
    <li class="p-teaser-clip"
        :class="addClass">
        <router-link :to="`${$route.path}${clip.route}/`" class="p-teaser-clip__link" @click.native="$root.saveScrollPos">


            <div class="p-teaser-clip__img-wp">
                <picture v-for="(image, index) in clip.images" :key="index" class="p-teaser-clip__img-item">
                    <source :srcset="image.url" :media="`(min-width: ${$root.breakpoints.desktop})`">
                    <img class="p-img-cover" :class="{'u-hidden-mobile': !image.showMobile}" :src="image.urlMobile" alt="">
                </picture>
            </div>
            <div class="p-teaser-clip__txt">
                <h2 class="p-teaser-clip__title"><strong>{{ clip.title }}</strong> {{ clip.additional }}</h2>
                <p class="p-teaser-clip__descrp" v-if="clip.director">{{ clip.director }}</p>
            </div>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: {
            clip: {
                type: Object,
                required: true,
            },
            addClass: {
                type: String,
                required: false,
            },
        },
    }
</script>
