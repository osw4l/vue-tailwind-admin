import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import store from './store';
import './assets/tailwind.css';


const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
}

const app = createApp(App).use(store).use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');

