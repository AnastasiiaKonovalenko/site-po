import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/Home/HomeView.vue';
import TheMenuWithPoint from '../views/Home/AboutMe.vue';
import ThePizzaGhost from '../views/Home/ThePizzaGhost.vue';
import Cadabra from '../views/Home/TheCadabra.vue';
import Logos from '../views/Home/TheLogos.vue';

const router = createRouter({
    history: createWebHashHistory(),
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
                    component: Cadabra,
                },
                {
                    name: 'logos',
                    path: 'logos',
                    component: Logos,
                },
            ],
        },
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    },
});

export default router;
