<template>
    <main class="main">
        <m-clips :clipsData="'/content/clips/films.json'"></m-clips>
    </main>
</template>

<script>
    export default {
       created: function () {
           this.$parent.theme = 't-light';
       }
    }
</script>
