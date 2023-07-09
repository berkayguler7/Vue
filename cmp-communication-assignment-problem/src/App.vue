<template>
	<h1>Communication Assignment</h1>
	<div>
		<active-user
			@change-user="changeUser"
			:name="name"
			:age="age"
		></active-user>
		<user-data @submit-user="submitUser"></user-data>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "Max",
			age: 31,
		};
	},
	methods: {
		submitUser(name, age) {
			this.name = name;
			this.age = age;
		},
		changeUser(name, age) {
			this.name = name;
			this.age = age;
		},
	},
};
</script>
