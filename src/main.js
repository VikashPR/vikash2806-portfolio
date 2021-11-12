import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);

app.use(AOS.init());

createApp(App).use(router).mount('#app')
