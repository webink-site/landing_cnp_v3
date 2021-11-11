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
            <Faq />
            <!-- <FreeLesson /> -->
            <Students />
            <Reviews />
            <Nikita />
            <Partners />
            <Semki />
            <MyWorks />
        </div>
        <Payment />
        <Social />
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
import Social from '../components/social.vue'
import Semki from '../components/Semki.vue'
import FreeLesson from '../components/FreeLesson.vue'


export default{
	components: {Social, Semki, Main, Descr, ForWho, Future, Program, Works, How, Students, Reviews, Payment, Faq, Nikita, Partners, MyWorks, FloatBtn, FreeLesson},
	computed: {
		...mapState('inline', ['questions']),
        ...mapGetters({ user: "smeta/getUser"}),
	},
}
</script>