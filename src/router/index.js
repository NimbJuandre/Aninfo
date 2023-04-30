import { createRouter, createWebHistory } from 'vue-router';
import SearchView from '../views/SearchView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/Search',
    component: SearchView,
  },
  {
    path: '/Search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/Search/Trending',
    name: 'trending',
    component: SearchView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
