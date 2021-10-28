
import axios from 'axios'

const forgot = {
	namespaced: true,
	state: {
		reviews: []
  	},
	mutations: {
		SET_REVIEWS(state, reviews){
            state.reviews = reviews
        }
	},
	actions: {
        loadReviews({commit}){
            axios
            .get('https://nikitapugachev.ru/wp-json/np/v1/get/reviews')
            .then(res =>{
                commit("SET_REVIEWS", res.data.data)
            })
        }
	},
	getters: {
		getReviews(state){
            return state.reviews
        }
	}
}

export default forgot


