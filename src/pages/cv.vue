<template>
    <main class="main">
        <m-txt-teaser :contentData="'/content/cv.html'"></m-txt-teaser>
    </main>
</template>

<script>
    export default {
       created: function () {
           this.$parent.theme = 't-dark';
       }
    }
</script>
