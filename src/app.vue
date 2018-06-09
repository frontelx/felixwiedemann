<template>
    <!-- page content wrapper -->
    <div
        id="app"
        class="app"
        :class="`${$root.isIndex ? '' : 'app--sticky '}${$root.bgImg ? 'app--bgImg ' : ''}${$root.theme}`"
        :style="$root.bgImg ? `background-image: url('${$root.bgImg}')` : ''">
        <router-view name="header"></router-view>
        <router-view name="main"></router-view>
    </div>
</template>
