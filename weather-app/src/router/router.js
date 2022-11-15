import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/pages/Home.vue';
//Menu Items
import Donate from '../components/pages/Donate.vue';
import Author from '../components/pages/Author.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/menu',
            name:'Menu',
            children: [
                {
                    path: 'author',
                    name: 'Author',
                    component: Author
                },
                {
                    path: 'donate',
                    name: 'Donate',
                    component: Donate
                }
            ]
        }
    ],
});

export default router
