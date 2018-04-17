<template>
    <main class="main">
        <m-intro></m-intro>
    </main>
</template>

<script>
    export default {

        // Runs when component is rendered
        created: function () {
            this.$root.theme = 't-dark';
            this.$root.bgImg = '';
        }

    }
</script>
