import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    routes: [
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList },
        { path: '/', redirect: '/teams' },
        { path: '/teams/:teamId', component: TeamMembers, props: true },
    ],
    history: createWebHistory(),
    linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
