<template>
    <main class="main">
        <h1 v-if="!$route.params.clip" class="visuallyhidden">{{ this.pageConfig.title }}</h1>

        <m-clips :clipsData="'/content/commercials/commercials.json'"></m-clips>
    </main>
</template>

<script>
    export default {

        // Component variables
        data() {
            return {
                pageConfig: this.$root.getPageConfigByRoute('/commercials', this.$root.navigation),
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

