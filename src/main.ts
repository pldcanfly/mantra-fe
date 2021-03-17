import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

import ShortChar from './components/ShortChar.vue';
import Icon from './components/Icon.vue';

createApp(App)
  .component('ShortChar', ShortChar)
  .component('Icon', Icon)
  .use(store)
  .use(router)
  .mount('#app');
