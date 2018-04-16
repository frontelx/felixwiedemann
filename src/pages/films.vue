<template>
    <main class="main">
        <m-clips :clipsData="'/content/clips/films.json'"></m-clips>
    </main>
</template>

<script>
    export default {
       created() {
           this.$root.theme = 't-light';
           this.$root.bgImg = '';
       },
    }
</script>
