import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login';
import App from './App.vue'
import './style.css'
import router from './router'

const pinia = createPinia()

const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId: '319306204460-t7auk281d5j677oqd4ei1bgotebscp3e.apps.googleusercontent.com'
  })

app.use(router)
app.use(pinia)
app.mount('#app')

