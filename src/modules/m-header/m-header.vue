<template>
    <header
        class="m-header"
        :class="$parent.bgImg ? 'm-header--bgImg' : ''"
        :style="$parent.bgImg ? `background-image: url('/content/bg/${$parent.bgImg}')` : ''">
        <h2 class="m-header__name">{{ $root.title.name }} <span class="m-header__add">{{ $root.title.additional }}</span></h2>
        <p class="m-header__title">{{ $root.title.title }}</p>
        <p-navigation
            :hasDropdown="true"
            :addClass="'m-header__nav'">
        </p-navigation>
    </header>
</template>
