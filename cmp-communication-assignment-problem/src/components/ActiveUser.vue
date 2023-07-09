<template>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    },
    methods: {
        changeUser(name, age) {
            this.$emit('change-user', name, age);
        }
    }
}
</script>
