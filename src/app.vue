<template>
    <!-- page content wrapper -->
    <div
        id="app"
        class="app"
        :class="`${$route.path === '/' ? '' : 'app--sticky '}${bgImg ? 'app--bgImg ' : ''}${theme}`"
        :style="bgImg ? `background-image: url('/content/bg/${bgImg}')` : ''">
        <router-view name="header"></router-view>
        <router-view name="main"></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                theme: 't-dark',
                bgImg: '',
            }
        }
    }
</script>
