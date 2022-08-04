import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHouse,
  faUser,
  faCar,
  faCalendar,
  faWrench,
  faArrowRightFromBracket,
  faMagnifyingGlass,
  faFilter,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';

library.add(faHouse, faUser, faCar, faCalendar, faWrench, faArrowRightFromBracket, faMagnifyingGlass, faFilter, faTrash);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
