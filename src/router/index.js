// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import HomeView from '@/views/home/home.view.vue';
import BlogView from '@/views/blog/blog.view.vue';
import ContactView from '@/views/contact/contact.view.vue';
import ProjectsView from '@/views/projects/projects.view.vue';
import NotFoundView from '@/views/404/404.vue';
import ProjectDetailsView from '@/views/projects/project.details.view.vue';
import LoginView from '@/views/login/login.view.vue';

export const ROUTE_HOME = '/';
export const ROUTE_BLOG = '/blog';
export const ROUTE_CONTACT = '/contact';
export const ROUTE_PROJECTS = '/projects';

const routes = [
  {
    path: ROUTE_HOME,
    name: 'home',
    component: HomeView,
  },
  {
    path: ROUTE_BLOG,
    name: 'blog',
    component: BlogView,
  },
  {
    path: ROUTE_CONTACT,
    name: 'contact',
    component: ContactView,
  },
  {
    path: ROUTE_PROJECTS,
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: `${ROUTE_PROJECTS}/:projectId`, // Only matches numbers, i.e. the ID
    name: 'projects_details',
    // props: true,
    component: ProjectDetailsView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },

  /* This catchAll should always be placed as the last route-check! */
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFoundView,
  },
];

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(/* process.env.BASE_URL */),
  routes,
});

export default router;
