// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app');
