import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const pinia = createPinia()
const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: '910439474234-ahak6bt5f0qovg60ktpnpjad3ombn9gk.apps.googleusercontent.com'
})

app.use(router)
app.use(pinia)
app.mount('#app')

