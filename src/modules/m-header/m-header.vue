<template>
    <header
        class="m-header"
        :class="`${$root.bgImg ? 'm-header--bgImg ' : ''}${$root.isIndex ? 'm-header--transparent' : ''}`"
        :style="$root.bgImg ? `background-image: url('${$root.bgImg}')` : ''">

        <h1 class="m-header__name" v-if="$root.isIndex">
            <router-link :to="'/'">
                {{ $root.title.name }} <span class="m-header__add">{{ $root.title.additional }}</span>
            </router-link>
        </h1>
        <h2 class="m-header__name" v-else>
            <router-link :to="'/'">
                {{ $root.title.name }} <span class="m-header__add">{{ $root.title.additional }}</span>
            </router-link>
        </h2>

        <p class="m-header__title">{{ $root.title.title }}</p>

        <p-navigation
            :hasDropdown="true"
            :addClass="'m-header__nav'">
        </p-navigation>
    </header>
</template>
