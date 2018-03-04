<template>
    <div>{{ msg }}</div>
</template>

<script>
    export default {
        props: {
            content: {
                type: String,
                required: true,
            }
        },

        data() {
            return {
                msg: this.content,
            }
        }
    }
</script>
