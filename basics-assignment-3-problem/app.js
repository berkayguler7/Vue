const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    watch: {
        counter(value) {
            const that = this;
            if (value > 37) {
                console.log("value > 37");
                setTimeout(function () {
                    that.counter = 0;
                }, 5000);
            }
        }
    },
    computed: {
        result() {
            if (this.counter < 37) {
                return "Not there yet";
            } else if (this.counter === 37) {
                return this.counter;
            } else {
                return "Too much!";
            }
        }
    },
    methods: {
        increment(num) {
            this.counter += num;
        }
    }
});

app.mount("#assignment");
