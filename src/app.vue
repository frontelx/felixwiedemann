<template>
    <!-- page content wrapper -->
    <div id="app" class="app" :class="theme">
        <router-view name="header"></router-view>
        <router-view name="main"></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               theme: 't-dark',
            }
        }
    }
</script>
