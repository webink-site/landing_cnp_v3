import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import store from '../store'
import Course from '../pages/Course.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Recovery from '../pages/Recovery.vue'
import Politika from '../pages/Politika.vue'
import Soglashenie from '../pages/Soglashenie.vue'
import Platezhi from '../pages/Platezhi.vue'
import Subscribe from '../pages/Subscribe.vue'
import Purgatory from '../pages/Purgatory.vue'


const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/1990',
			component: Home
		},
		{
			path: '/2990',
			component: Home
		},
		{
			path: '/3990',
			component: Home
		},
		{
			path: '/course',
			component: Course,
			beforeEnter: (to, from, next) => {
				

					if(store.getters["smeta/getAuthenticated"]){
		        		if(!store.getters["smeta/checkAcces"]){
		        			next("/")
		        		}else{
		        			if(store.getters["smeta/getPotok"]){
		        				next('/success')
		        			}else{
		        				next()
		        			}
		        		}
			        }else {
				        if (to.path != "/enter") {
				            next("/enter")
				        }else {
				            next()
				        }
				    }
				}

		},
		{
			path: '/enter',
			component: Login,
		},
		{
			path: '/success',
			component: Purgatory
		},
		{
			path: '/signup',
			component: Signup,
		},
		{
			path: '/recovery',
			component: Recovery,
		},
		{
			path: '/politika',
			component: Politika,
		},
		{
			path: '/soglashenie',
			component: Soglashenie,
		},
		{
			path: '/platezhi',
			component: Platezhi,
		},
		{
			path: '/subscribe',
			component: Subscribe,
		},

	]

export default routes;