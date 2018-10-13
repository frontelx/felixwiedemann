<template>
    <div class="p-img-lazyload" :style="`padding-bottom: ${this.padding}%`">
        <picture>
            <source :data-srcset="retinaImage" :media="`(min-width: ${$root.breakpoints.tablet})`">
            <img class="p-img-lazyload__img lazyload" :data-src="image" alt="">
        </picture>
    </div>
</template>

<script>
    const defaultRatio = {
        width: 1920,
        height: 1038,
    };

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
                    return {}
                }
            },
        },
        data() {
            return {
                padding: this.percentualHeight(),
            }
        },
        methods: {
            percentualHeight() {
                const width = (this.ratio.hasOwnProperty('width') ? this.ratio.width : defaultRatio.width);
                const height = (this.ratio.hasOwnProperty('height') ? this.ratio.height : defaultRatio.height);

                return height * 100 / width;
            },
        },
    }
</script>
