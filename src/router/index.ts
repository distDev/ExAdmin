import CalendarViewVue from '@/views/CalendarView.vue';
import CarsViewVue from '@/views/CarsView.vue';
import LoginViewVue from '@/views/LoginView.vue';
import ServicesViewVue from '@/views/ServicesView.vue';
import UsersViewVue from '@/views/UsersView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarViewVue,
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarsViewVue,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesViewVue,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersViewVue,
    },
  ],
});

export default router;
