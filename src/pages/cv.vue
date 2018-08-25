<template>
    <main class="main">
        <h1 class="visuallyhidden">{{ this.pageConfig.title }}</h1>

        <m-txt :contentData="'/content/cv.html'"></m-txt>
    </main>
</template>

<script>
    export default {

        // Component variables
        data() {
            return {
                pageConfig: this.$root.getPageConfigByRoute('/cv/', this.$root.navigation),
            }
        },

        // Runs when component is rendered
        created: function () {
            this.$root.theme = this.pageConfig.theme;
            this.$root.bgImg = this.pageConfig.bgImg;
        }

    }
</script>
