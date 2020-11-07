import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import 'vuetify/dist/vuetify.min.css'


import VueCoreVideoPlayer from 'vue-core-video-player'

const ru = {
  "dashboard" : {
    "btn": {
       "play": "Пуск",
      "pause": "Пауза",
      "fullscreen": "Во весь экран",
      "exitFullscreen": "Выйти из полноэкранного режима",
      "mute": "Выкл. звук",
      "unmute": "Вкл. звук",
      "back": "Назад",
      "pip": "Закрепить"
    },
    "settings" : {
      "autoplay": "Автоплей",
      "loop": "Бесконечно",
      "speed": "Скорость",
      "resolution": "Качество"
    }
  },
  "layers": {
    "error": {
      "title": "(O_O)?  Ошибка!",
      "2404": "Видеофайл не найден",
      "2502": "Media Network Error",
      "2503": "Video Cannot DECODE",
      "2504": "Video Cannot Play!"
    },
    "loading": {
      "msg": "Загрузка ..."
    }
}}


Vue.use(VueCoreVideoPlayer,
  {
  lang: ru
});
// import Vuetify from 'vuetify'
 

// Vue.use(Vuetify)
// import ru from 'vuetify/es5/locale/ru'

import 'swiper/css/swiper.css'


import 'swiper/css/swiper.css'


const user = JSON.parse(localStorage.getItem("user"))
store.dispatch("smeta/VALIDATE", user);



Vue.use(VueRouter) 
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))
Vue.use(VueAwesomeSwiper)



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})


