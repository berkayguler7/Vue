const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullname() {
      console.log("Running outputFullname")
      if (this.name === "")
        return "";
      return this.name + " " + "Güler";
    },
  },
  computed: {
    fullname() {
      console.log("Running fullname")
      if (this.name === "")
        return "";
      return this.name + " " + "Güler";
    }
  }
});

app.mount('#events');
