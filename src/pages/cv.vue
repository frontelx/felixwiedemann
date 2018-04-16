<template>
    <main class="main">
        <m-txt-teaser :contentData="'/content/cv.html'"></m-txt-teaser>
    </main>
</template>

<script>
    export default {
       created: function () {
            const pageConfig = this.$root.getPageConfigByRoute('/cv', this.$root.navigation);

            this.$root.theme = pageConfig.theme;
            this.$root.bgImg = pageConfig.bgImg;
       }
    }
</script>
