<template>
    <nav class="p-navigation" :class="addClass">
        <ul class="p-navigation__list">
            <li
                v-for="(navigationItem, index) in $root.navigation"
                :key="navigationItem.id"
                class="p-navigation__item">
                <router-link :to="navigationItem.route">{{ navigationItem.title }}</router-link>
            </li>
        </ul>


        <select class="p-navigation__select" @change="changeRoute" v-if="hasDropdown">
            <option
                v-for="(navigationItem, index) in $root.navigation"
                :key="navigationItem.id"
                :value="navigationItem.route">
                {{ navigationItem.title }}
            </option>
        </select>
    </nav>
</template>

<script>
    export default {
        props: {
            addClass: {
                type: String,
                required: false,
            },
            hasDropdown: {
                type: Boolean,
                required: false,
            },
        },

        data() {
            return {}
        },

        methods: {
            changeRoute(event) {
                this.$router.push({
                    path: event.target.value
                });
            },
        },
    }
</script>
