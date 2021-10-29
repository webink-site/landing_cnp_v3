<template>
	<div>
		<Main />
        <Descr />
        <ForWho />
        <Future />
        <Program />
        <Works />
        <How />
        <Students />
        <Reviews />
        <Payment />
         <Faq />
    <!-- <social /> -->
	</div>
</template>




<script>
import {mapState, mapGetters} from 'vuex'
import social from '../components/social.vue'
import Main from '../components/Main.vue'
import Descr from '../components/Descr.vue'
import ForWho from '../components/ForWho.vue'
import Future from '../components/Future.vue'
import Program from '../components/Program.vue'
import Works from '../components/Works.vue'
import How from '../components/How.vue'
import Students from '../components/Students.vue'
import Reviews from '../components/Reviews.vue'
import Payment from '../components/Payment.vue'
import Faq from '../components/Faq.vue'


export default{
	components: {social, Main, Descr, ForWho, Future, Program, Works, How, Students, Reviews, Payment, Faq},
	computed: {
		...mapState('inline', ['questions']),
        ...mapGetters({ user: "smeta/getUser"}),
	}
}
</script>