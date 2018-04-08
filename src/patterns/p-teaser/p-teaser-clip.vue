<template>
    <router-link :to="`${$route.path}/${$root.seoUrl(title)}`" class="p-teaser-clip" :class="addClass">
        <picture>
            <source :srcset="`/content/clips/${image}.jpg`" media="(min-width: 750px)">
            <img class="p-img-cover" :src="`/content/clips/${image}-mobile.jpg`" alt="" :title="title">
        </picture>
        <div class="p-teaser-clip__txt">
            <h2 class="p-teaser-clip__title">{{ title }} {{ additional }}</h2>
            <p class="p-teaser-clip__descrp" v-if="description">{{ description }}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            additional: {
                type: String,
                required: false,
            },
            description: {
                type: String,
                required: false,
            },
            image: {
                type: String,
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
