const app = Vue.createApp({
    data() {
        return {
            className: '',
            paragraphIsVisible: true,
            backgroundColor: ''
        }
    },
    methods: {
        setClassName(event) {
            this.className = event.target.value;
        },
        toggleParagraph() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        },
        setBackgroundColor(event) {
            this.backgroundColor = event.target.value;
        }
    },
    computed: {
        paragraphClasses() { 
            return { 
                user1: this.className === 'user1', 
                user2: this.className === 'user2', 
                visible: this.paragraphIsVisible, 
                hidden: !this.paragraphIsVisible 
            };
        },
        backgroundColorStyle() {
            return { backgroundColor: this.backgroundColor };
        }
    }
});

app.mount("#assignment");