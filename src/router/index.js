import VueRouter from 'vue-router'
import routes from './routes.js';

import store from '../store'

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        }else if (to.hash) {
          return {
            selector: to.hash
            // , offset: { x: 0, y: 10 }
          }
        }else {
          return { x: 0, y: 0 }
        }
    }
});


// router.beforeEach((to, from, next) => {

//     if (store.getters["smeta/getAuthenticated"]) {
//          next()
//     }else{
//         if (to.path != "/login") {
//              next("/login")
//          }
//          else {
//              next()
//          }
//     }
// })




export default router
