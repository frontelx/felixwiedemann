<template>
    <main class="main">
        <m-intro></m-intro>
    </main>
</template>

<script>
    export default {
        created: function () {
            this.$root.theme = 't-dark';
            this.$root.bgImg = '';
        }
    }
</script>
