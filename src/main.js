import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login';
import App from './App.vue'
import './style.css'
import router from './router'

const pinia = createPinia()

const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId: '910439474234-oc2mige9dhidjqcq6kuqeq4c0d81maj6.apps.googleusercontent.com'
  })

app.use(router)
app.use(pinia)
app.mount('#app')

