<template>
    <div class="m-clip-list">
        <p-teaser-clip
            :title="'Hola Felix'"
            :description="'Tengo hambre'"
            :image="'city-of-lights'"
        >
        </p-teaser-clip>
    </div>
</template>


<script>
    export default {
        props: {

        },

        data() {
            return {
                data: {
                    items: [
                        { message: 'Foo' },
                        { message: 'Bar' }
                    ]
                }
            }
        },
    }
</script>
