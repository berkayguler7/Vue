Vue.createApp({
    data() {
        return {
            counter: 0,
            input1: '',
            input2: '',
            confirmedInput2: '',
        };
    },
    methods: {
        btnClick() {
            alert('Submitted!');
        },
        setInputOne(event) {
            this.input1 = event.target.value;
        },
        setInputTwo(event) {
            this.input2 = event.target.value;
        },
        confirmInput() {
            this.confirmedInput2 = this.input2;
        }
    }
}).mount('#assignment');
