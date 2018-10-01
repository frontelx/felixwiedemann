<template>
    <div class="p-img-lazyload" :style="`padding-bottom: ${this.height}`">
        <picture>
            <source :srcset="retinaImage" :media="`(min-width: ${$root.breakpoints.tablet})`">
            <img class="p-img-lazyload__img" :src="image" alt="">
        </picture>
    </div>
</template>

<script>
    export default {
        props: {
            retinaImage: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            ratio: {
                type: Object,
                required: false,
                default() {
                    return {
                        width: 1920,
                        height: 1038,
                    }
                }
            },
        },
        data() {
            return {
                height: `${this.ratio.height * 100 / this.ratio.width}%`,
            }
        },
    }
</script>
