<template>
    <div class="m-clip-list__item p-teaser-clip">
        <picture>
            <source srcset="/images/clips/city-of-lights-default.jpg" media="(min-width: 750px)">
            <img class="p-img-cover" src="/images/clips/city-of-lights-s.jpg" alt="">
        </picture>
        <div class="p-teaser-clip__txt">
            <h2 class="p-teaser-clip__title">{{ title }}</h2>
            <p class="p-teaser-clip__descrp" v-if="description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: false,
            }
        },

        data() {
            return {
                msg: this.content,
            }
        },
    }
</script>
