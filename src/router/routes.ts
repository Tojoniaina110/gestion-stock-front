import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  // },
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/LoginPage.vue') }],
  },
  {
    path: '/register',
    component: () => import('layouts/PublicLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/RegisterPage.vue') }],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/dashboard', component: () => import('src/pages/DashboardPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
