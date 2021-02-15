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
    name: 'RaidIndex',
    component: () => import(/* webpackChunkName: "Raids" */ '../views/Raids/Index.vue'),
    children: [
      {
        path: '',
        name: 'Raids',
        component: () => import(/* webpackChunkName: "Raids" */ '../views/Raids/Overview.vue'),
      },
      {
        path: ':id',
        name: 'RaidDetail',
        component: () => import(/* webpackChunkName: "RaidDetails" */ '../views/Raids/Details.vue'),
      },
    ],
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
