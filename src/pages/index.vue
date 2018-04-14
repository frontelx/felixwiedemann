<template>
    <main class="main">
        <m-intro></m-intro>
    </main>
</template>

<script>
    export default {
        created: function () {
            this.$parent.theme = 't-dark';
            this.$parent.bgImg = '';
        }
    }
</script>
