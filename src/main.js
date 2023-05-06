// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import VueProgressBar from "@aacassandra/vue3-progressbar";
import store from './store'
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

const options = {
    color: "#29a6ff",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
};

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(VueProgressBar, options)
    .use(router)
    .use(vuetify)
    .use(store)
    .mount('#app');
