<template>
	<section id="purgatory">
		<PopNoCross />
		<div class="container text-center">
			<p class="white-bold grey">
				✌️🤙 Добро пожаловать на курс по съемке видео на телефон за 7 дней!<br>
				У тебя уже есть аккаунт, поэтому <router-link to="/enter" class="blue-text">авторизируйся</router-link> и приступай к обучению
				<br><br>	
				<!-- Чтобы тебя добавили в закрытый чат для участников <a target="_blank" href="http://t.me/nikitapugachev" class="blue-text">пришли 
				нам в Telegram</a> свой e-mail <span style="color: #fff;">{{user.user_email}}</span> -->
			</p>
		</div>
	</section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PopNoCross from '../components/PopNoCross.vue'

	export default{
		components: {PopNoCross},
		computed: {
			...mapGetters({ user: "smeta/getUser"}),
		},
		created(){
			this.$store.dispatch("smeta/changeBotType", true)
		}
	}
</script>


<style scoped>
	.grey{
		color: #999999;
	}
	#purgatory .container{
		max-width: 750px;
	}
	#purgatory{
		height: calc(100vh - 123px);
		display: flex;
		align-items: center;
	}
</style>