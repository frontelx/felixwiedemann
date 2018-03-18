<template>
    <transition name="fade">
        <main class="main">
            <m-clip-list :clipsData="'/content/clips/films.json'"></m-clip-list>
        </main>
    </transition>
</template>

<script>
    export default {
       created: function () {
           this.$parent.theme = 't-light';
       }
    }
</script>
