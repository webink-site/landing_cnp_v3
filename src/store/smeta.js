
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
        }
	},
	actions: {
        async getLessons({commit}){
            try {
                const { data } = await axios.get(`https://nikitapugachev.com/wp-json/np/v1/get/videos`)
                return commit('SET_LESSONS', data)
            }
            catch (err) {
                commit('SNACKBAR')
            }
        },
		 async AUTH_REQUEST({ commit, dispatch }, payload) {
            try {
                const { data } = await axios.post(`https://nikitapugachev.com/wp-json/jwt-auth/v1/token`, payload)
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
                    url: `https://nikitapugachev.com/wp-json/jwt-auth/v1/token/validate`,
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

            // let result = state.user.roles.toString()
            // if(result === 'contributor'){
            //     return false
            // }else{
            //     return true
            // }
            
        }
	}
}

export default smeta


