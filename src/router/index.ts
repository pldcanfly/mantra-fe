import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/raids',
    name: 'Raids',
    component: () => import(/* webpackChunkName: "Raids" */ '../views/Raids.vue'),
  },
  {
    path: '/raids/:id',
    name: 'RaidDetail',
    component: () => import(/* webpackChunkName: "RaidDetails" */ '../views/RaidDetails.vue'),
  },
  {
    path: '/roster',
    name: 'Roster',
    component: () => import(/* webpackChunkName: "Roster" */ '../views/Roster.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
