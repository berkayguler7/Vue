function getDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function dealDamage(recipient, value) {
    recipient -= value;
    return recipient > 0 ? recipient : 0;
}

function heal(recipient, value) {
    recipient += value;
    return recipient > 100 ? 100 : recipient;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 1,
            winner: null,
            logs: []
        };
    },
    methods: {
        attack() {
            this.currentRound++;
            const playerDamage = getDamage(5, 12);
            const monsterDamage = getDamage(8, 15);
            this.monsterHealth = dealDamage(this.monsterHealth, playerDamage);
            this.playerHealth = dealDamage(this.playerHealth, playerDamage);
            this.addLog('player', 'attack', playerDamage);
            this.addLog('monster', 'attack', monsterDamage);
        },
        specialAttack() {
            this.currentRound++;
            console.log('specialAttack');
            const playerDamage = getDamage(10, 25);
            const monsterDamage = getDamage(8, 15);
            this.monsterHealth = dealDamage(this.monsterHealth, playerDamage);
            this.playerHealth = dealDamage(this.playerHealth, monsterDamage);
            this.addLog('player', 'attack', playerDamage);
            this.addLog('monster', 'attack', monsterDamage);
        },
        heal() {
            this.currentRound++;
            console.log('heal');
            const playerHeal = getDamage(8, 20);
            this.playerHealth = heal(this.playerHealth, playerHeal);
            const monsterDamage = getDamage(8, 15);
            this.playerHealth = dealDamage(this.playerHealth, monsterDamage);
            this.addLog('player', 'heal', playerHeal);
            this.addLog('monster', 'attack', monsterDamage);
        },
        surrender() {
            this.currentRound++;
            console.log('surrender');
            this.winner = 'monster';
        },
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 1;
            this.winner = null;
        },
        addLog(by, type, value) {
            this.logs.unshift({
                by,
                type,
                value
            });
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    }
});

app.mount('#game');