<template>
    <main class="main">
        <h1>Commercials</h1>
    </main>
</template>

<script>
    export default {
       created: function () {
            const pageConfig = this.$root.getPageConfigByRoute('/commercials', this.$root.navigation);

            this.$root.theme = pageConfig.theme;
            this.$root.bgImg = pageConfig.bgImg;
       }
    }
</script>
