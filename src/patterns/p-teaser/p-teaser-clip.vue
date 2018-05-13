<template>
    <router-link
        :to="`${$route.path}${clip.route}`"
        class="p-teaser-clip"
        :class="addClass">
        <picture>
            <source :srcset="clip.image" :media="`(min-width: ${$root.breakpoints.tablet})`">
            <img class="p-img-cover" :src="clip.image" alt="">
        </picture>
        <div class="p-teaser-clip__txt">
            <h2 class="p-teaser-clip__title">{{ clip.title }} {{ clip.additional }}</h2>
            <p class="p-teaser-clip__descrp" v-if="clip.subtitle">{{ clip.subtitle }}</p>
        </div>
    </router-link>
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
