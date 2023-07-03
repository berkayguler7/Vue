const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      parameter: 0,
    };
  },
  methods: {
    setCounter(n) {
      this.counter += n;
    }
  },
});

app.mount('#events');
