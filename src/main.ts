import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//@ts-ignore
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import ShortChar from './components/ShortChar.vue';
import Icon from './components/Icon.vue';

createApp(App)
  .component('ShortChar', ShortChar)
  .component('Icon', Icon)
  .use(store)
  .use(bootstrap)
  .use(router)
  .mount('#app');
