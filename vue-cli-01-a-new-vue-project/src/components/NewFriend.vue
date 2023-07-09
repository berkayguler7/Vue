<template>
    <form @submit.prevent="submitData">
        <label>Your Name</label>
        <input type="text" placeholder="Name" v-model="name" />
        <br>
        <label>Your E-Mail</label>
        <input type="email" placeholder="E-Mail" v-model="email" />
        <br>
        <label>Your Phone</label>
        <input type="tel" placeholder="Phone" v-model="phone" />
        <br><br>
        <button>Add Friend</button>
    </form>
</template>

<script>
export default {
    emits: ['add-friend'],
    data() {
        return {
            name: '',
            email: '',
            phone: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('add-friend', {
                id: new Date().toISOString(),
                name: this.name,
                email: this.email,
                phone: this.phone
            });
        }
    }
};
</script>