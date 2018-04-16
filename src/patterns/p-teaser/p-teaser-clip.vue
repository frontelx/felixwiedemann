<template>
    <router-link
        :to="`${$route.path}/${clip.route}`"
        class="p-teaser-clip"
        :class="addClass">
        <picture>
            <source :srcset="`/content/clips/${clip.image}.jpg`" media="(min-width: 750px)">
            <img class="p-img-cover" :src="`/content/clips/${clip.image}-mobile.jpg`" alt="" :title="clip.title">
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

        data() {
            return {}
        },
    }
</script>
