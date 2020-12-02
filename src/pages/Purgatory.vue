<template>
	<section id="purgatory">
		<div class="container text-center">
			<p class="white-bold grey">
				✌️🤙 Добро пожаловать на курс по съемке фуд-видео!<br>
				Мы начнем обучение <span style="color: #fff;">4 января</span>
				<br><br>	
				Чтобы тебя добавили в закрытый чат для участников <a target="_blank" href="http://t.me/nikitapugachev" class="blue-text">пришли 
				нам в Telegram</a> свой e-mail <span style="color: #fff;">{{user.user_email}}</span>
			</p>
		</div>
	</section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
	export default{
		computed: {
			...mapGetters({ user: "smeta/getUser"}),
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