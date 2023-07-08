<template>
    <li>
        <h2>{{ friend.name }} {{ this.isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="toggleFavorite">{{ friend.isFavorite ? 'Unfavorite' : 'Favorite' }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        friend: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            detailsAreVisible: false,
            isFavorite: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.isFavorite = !this.isFavorite;
        },
    },
}
</script>