<template>
    <main class="main">
        <m-clips :clipsData="'/content/clips/films.json'"></m-clips>
    </main>
</template>

<script>
    export default {
        watch:{
            $route (to, from){
                // Change theme if player or not
                this.$root.theme = this.$route.params.clip ? 't-dark' : 't-light';
            }
        },

        created() {
            const pageConfig = this.$root.getPageConfigByRoute('/films', this.$root.navigation);

            this.$root.theme = pageConfig.theme;
            this.$root.bgImg = pageConfig.bgImg;
        },
    }
</script>
