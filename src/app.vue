<template>
    <!-- page content wrapper -->
    <div
        id="app"
        class="app"
        :class="`${$route.path === '/' ? '' : 'app--sticky '}${$root.bgImg ? 'app--bgImg ' : ''}${$root.theme}`"
        :style="$root.bgImg ? `background-image: url('/content/bg/${$root.bgImg}')` : ''">
        <router-view name="header"></router-view>
        <router-view name="main"></router-view>
    </div>
</template>
