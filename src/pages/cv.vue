<template>
    <main class="main">
        <m-txt-teaser :contentData="'/content/cv.html'"></m-txt-teaser>
    </main>
</template>

<script>
    export default {
       created: function () {
           this.$root.theme = 't-dark';
           this.$root.bgImg = 'SLIDE-Away-07B-srgb.jpg';
       }
    }
</script>
