const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullname: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   this.fullname = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // }
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
    },
    resetInput() {
      this.name = "";
    },
  },
  computed: {
    fullname() {
      console.log("Running fullname")
      if (this.name === "" || this.lastName === "")
        return "";
      return this.name + " " + this.lastName;
    }
  }
});

app.mount("#events");
