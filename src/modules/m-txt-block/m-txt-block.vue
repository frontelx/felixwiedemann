<template>

    <div class="m-txt-block space-bt-pd-50" v-html="content"></div>
</template>

<script>
    export default {
        props: {
            contentData: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                content: [],
            }
        },

        created() {
            this.getContent();
        },

        methods: {
            getContent() {
                fetch(this.contentData)
                    .then(response => response.text())
                    .then(data => this.content = data)
                    .catch(error => console.log('No content found', error));
            }
        },
    }
</script>
