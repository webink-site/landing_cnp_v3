<template>
	<div>
		<div ref="beforePay">
            <Main />
            <FloatBtn />
            <Descr />
            <ForWho />
            <Future />
            <Program />
            <Works />
            <How />
            <Students />
            <Reviews />
            <Nikita />
            <Partners />
            <MyWorks />
        </div>
        <Payment />
        <Faq />
	</div>
</template>




<script>
import {mapState, mapGetters} from 'vuex'
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
import Nikita from '../components/Nikita.vue'
import Partners from '../components/Partners.vue'
import MyWorks from '../components/MyWorks.vue'
import FloatBtn from '../components/FloatBtn.vue'


export default{
	components: {Main, Descr, ForWho, Future, Program, Works, How, Students, Reviews, Payment, Faq, Nikita, Partners, MyWorks, FloatBtn},
	computed: {
		...mapState('inline', ['questions']),
        ...mapGetters({ user: "smeta/getUser"}),
	},
}
</script>