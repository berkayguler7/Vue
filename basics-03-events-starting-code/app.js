const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      parameter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    setCounter(n) {
      this.counter += n;
    },
    setName(event) {
      this.name = event.target.value;
    },
    signUp() {
      alert('Signed up!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  },
});

app.mount('#events');
