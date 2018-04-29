<template>
    <main class="main">
        <m-txt-block :contentData="'/content/contact.html'"></m-txt-block>
    </main>
</template>

<script>
    export default {

        // Component variables
        data() {
            return {
                pageConfig: this.$root.getPageConfigByRoute('/contact', this.$root.navigation),
            }
        },

        // Runs when component is rendered
        created: function () {
            this.$root.theme = this.pageConfig.theme;
            this.$root.bgImg = this.pageConfig.bgImg;
        }

    }
</script>
