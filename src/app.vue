<template>
    <!-- page content wrapper -->
    <div id="app" class="app">

        <!-- add 'm-clip-list' module -->
        <m-clip-list :jsonUrl="'/content/clips/films.json'"></m-clip-list>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style>
</style>
