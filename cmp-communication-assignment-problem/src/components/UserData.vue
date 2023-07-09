<template>
	<form @submit.prevent="submitUser">
		<label>Username</label>
		<input type="text" placeholder="Username" v-model="username" />
		<br />
		<label>Age</label>
		<input type="number" placeholder="Age" v-model="age" />
		<br /><br />
		<button>Submit</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			age: "",
		};
	},
	emits: ["submit-user"],
	methods: {
		submitUser() {
			this.$emit("submit-user", this.username, this.age);
		},
	},
};
</script>
