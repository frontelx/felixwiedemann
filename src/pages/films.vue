<template>
    <main class="main">
        <m-clips :clipsData="'/content/clips/films.json'"></m-clips>
    </main>
</template>

<script>
    export default {

        // Component variables
        data() {
            return {
                pageConfig: this.$root.getPageConfigByRoute('/films', this.$root.navigation),
            }
        },

        // Watches url changes
        watch: {
            $route (to, from){
                // Change theme to dark if player or not
                this.$root.theme = this.$route.params.clip ? 't-dark' : this.pageConfig.theme;
            }
        },

        // Runs when component is rendered
        created() {
            this.$root.theme = this.pageConfig.theme;
            this.$root.bgImg = this.pageConfig.bgImg;
        },
    }
</script>
