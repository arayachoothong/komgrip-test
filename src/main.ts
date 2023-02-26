import { createApp } from 'vue'
import '@/assets/styles/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const app = createApp(App);
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
    history: createWebHistory(),
    routes
});
app.use(router)
app.mount('#app')

