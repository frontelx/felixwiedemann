<template>
    <nav class="p-navigation">
        <ul>
            <li
                v-for="(navigationItem, index) in $root.navigation"
                :key="navigationItem.id"
                class="p-navigation__item">
                <router-link :to="navigationItem.route">{{ navigationItem.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
        },

        data() {
            return {}
        },
    }
</script>
