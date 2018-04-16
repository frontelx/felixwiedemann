<template>
    <main class="main">
        <h1>Contact</h1>
    </main>
</template>

<script>
    export default {
       created: function () {
            const pageConfig = this.$root.getPageConfigByRoute('/contact', this.$root.navigation);

            this.$root.theme = pageConfig.theme;
            this.$root.bgImg = pageConfig.bgImg;
       }
    }
</script>
