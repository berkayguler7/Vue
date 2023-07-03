const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      parameter: 0,
      name: '',
    };
  },
  methods: {
    setCounter(n) {
      this.counter += n;
    },
    setName(event) {
      this.name = event.target.value;
    }
  },
});

app.mount('#events');
