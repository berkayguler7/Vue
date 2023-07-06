const app = Vue.createApp({
  data() {
    return {
      goalValue: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalValue);
      console.log(this.goals);
    },
    deleteGoal(index) {
      this.goals.splice(index, 1);
    },
  }
});

app.mount('#user-goals');
