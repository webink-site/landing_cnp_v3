
import axios from 'axios'

const smeta = {
	namespaced: true,
	state: {
		user: null,
		token: null,
        lessons: [],
        snack: false
  	},
	mutations: {
		SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_LESSONS(state, lessons){
            state.lessons = lessons
        },
        SNACKBAR(state){
            state.snack = !state.snack

            setTimeout(function(){
                state.snack = false;
            }, 5000);
        },
        SET_TAGS(state, payload){
            state.user.tags = payload
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        UPDATE_USER_ROLE(state, roles){
            state.user.roles = roles
            localStorage.setItem("user", JSON.stringify(state.user));
        }
	},
	actions: {
        async getLessons({commit}){
            try {
                const { data } = await axios.get(`https://nikitapugachev.ru/wp-json/np/v1/get/videos`)
                return commit('SET_LESSONS', data)
            }
            catch (err) {
                commit('SNACKBAR')
            }
        },
		 async AUTH_REQUEST({ commit, dispatch }, payload) {
            try {
                const { data } = await axios.post(`https://nikitapugachev.ru/wp-json/jwt-auth/v1/token`, payload)
                return dispatch('VALIDATE', data)
            }
            catch (err) {
            	commit('SNACKBAR')
            }
        },
        async VALIDATE({ commit, state }, user) {
            if (user) {
                commit("SET_TOKEN", user.token);
                commit("SET_USER", user);
            }

            if (!state.user) {
                return
            }

            try {
                const response = await axios({
                    url: `https://nikitapugachev.ru/wp-json/jwt-auth/v1/token/validate`,
                    method: 'post',
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                localStorage.setItem("user", JSON.stringify(user));
                commit("SET_TOKEN", user.token);
                commit("SET_USER", user);
            }
            catch (err) {
                localStorage.removeItem("user");
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
            }
        },
         async SIGN_OUT({ commit }) {
            localStorage.removeItem("user");
            commit("SET_TOKEN", null);
            commit("SET_USER", null);
        },
        UPDATE_TAGS({commit}, payload){

            commit("SET_TAGS", payload);
        },
        updateUser({commit}, user){
            commit("UPDATE_USER_ROLE", user.roles)
        }
	},
	getters: {
  		getUser(state) {
            return state.user
        },
        getAuthenticated(state) {
            return state.token && state.user
        },
        checkAcces(state){
            let result 
            if(state.user == null){
                result = false
            }else{
                if(state.user.roles.toString() === 'contributor'){
                    result = false
                }else{
                     result = true
                }
            }

            return result
            
        },
        getPotok(state){
            if(state.user.tags !== null && state.user.tags.includes('FOOD2')){
                return true
            }else{
                return false
            }
        }
	}
}

export default smeta


