const app = Vue.createApp({
    data() {
        return {
            myName: 'Berkay',
            age: 26,
            imageUrl: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142774.jpg'
        };
    },
    methods: {
        randomNumber() {
            return Math.random();
        },
    }
});

app.mount('#assignment');