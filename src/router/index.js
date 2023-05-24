import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ViewMore from '../views/ViewMore.vue';
import DetailView from '../views/DetailedView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/viewMore/:type',
    name: 'ViewMore',
    component: ViewMore,
  },
  {
    path: '/detail/:type/:id',
    name: 'Detail',
    component: DetailView,
    props: true
  },
  // {
  //   path: '/Detail/manga/:id',
  //   name: 'detailManga',
  //   component: DetailView,
  // },
  {
    path: '/Trending',
    name: 'trending',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
