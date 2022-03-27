import { createApp } from 'vue';
import $bus from '@/utilities/event';

import FontAwesomeIcon from '@/utilities/font.awesome.library';

import App from './App.vue';
import router from './router';

import User from './utilities/authentication.manager';

// Entrypoint for Sass
import '@/scss/index.scss';

User.init();

const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router);

app.config.globalProperties.$bus = $bus;

app.mount('#app');
