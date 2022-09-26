import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js'

// createApp(App).mount('#app')
const app = createApp(App)

import BaseCard from './components/layouts/BaseCard.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import BaseButton from './components/layouts/BaseButton.vue';
import BaseBadge from './components/layouts/BaseBadge.vue'

import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import { SidebarMenu } from 'vue-sidebar-menu';
import TheHeadersider from './components/layouts/TheHeadersider'
import moment from 'moment-timezone'

moment.tz.setDefault('Africa/Nairobi')

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'



app.use(store);
app.use(router);
// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.component('base-card',BaseCard);
app.component('the-header',TheHeader);
app.component('base-button', BaseButton);
app.component('vue-sidebar', VueSidebarMenuAkahon)
app.component('vue-sidebarnew', SidebarMenu)
app.component('the-headersider', TheHeadersider)
app.component('base-badge',BaseBadge)
// app.use(VueMaterial)

app.mount('#app');

//new one
