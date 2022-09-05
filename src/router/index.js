import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/HomeView.vue';
import TheMenuWithPoint from '../views/Home/AboutMe.vue';
import ThePizzaGhost from '../views/Home/components/ThePizzaGhost.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: '',
                    component: TheMenuWithPoint,
                },
                {
                    name: 'pizza-ghost',
                    path: 'pizza-ghost',
                    component: ThePizzaGhost,
                },
                {
                    name: 'cadabra',
                    path: 'cadabra',
                    component: ThePizzaGhost,
                },
                {
                    name: 'cv',
                    path: 'cv',
                    component: ThePizzaGhost,
                },
                {
                    name: 'contacts',
                    path: 'contacts',
                    component: ThePizzaGhost,
                },
            ],
        },
    ],
});

export default router;
