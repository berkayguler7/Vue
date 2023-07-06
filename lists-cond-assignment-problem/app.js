const app = Vue.createApp({
    data() {
        return {
            taskValue: '',
            tasks: [],
            listIsVisible: true,
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskValue);
        },
        toggleList() {
            this.listIsVisible = !this.listIsVisible;
        }
    },
    computed: {
        listStyles() {
            return {
                display: this.listIsVisible ? 'block' : 'none',
            };
        }
    }
});

app.mount('#assignment');