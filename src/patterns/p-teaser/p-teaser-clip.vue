<template>
    <li class="p-teaser-clip"
        :class="addClass">
        <router-link :to="`${$route.path}${clip.route}`">
            <picture>
                <source :srcset="clip.image" :media="`(min-width: ${$root.breakpoints.desktop})`">
                <img class="p-img-cover" :src="clip.imagemobile ? clip.imagemobile : clip.image" alt="">
            </picture>
            <div class="p-teaser-clip__txt">
                <h2 class="p-teaser-clip__title">{{ clip.title }} {{ clip.additional }}</h2>
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
