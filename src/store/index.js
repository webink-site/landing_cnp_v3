import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import smeta from './smeta'
import inline from './inline'
import signup from './signup'
import forgot from './forgot'
import reviews from './reviews'

export default new Vuex.Store({
	modules: {
		smeta,
		inline,
		signup,
		forgot,
		reviews
	}
}) 