<template>
	<div class="myheader" :class="{transp: this.$route.path === '/'}">
		<div class="container-fluid">
            <div class="shapka">
            	<router-link to="/" tag="a" class="header__logo wow">
	            	<img src="https://nikitapugachev.ru/wp-content/themes/np/assets/img/Logo.svg">
	            </router-link>

	            <div class="log-row" v-if="user === null">
	            	<router-link to="/enter" tag="button" class="shapka-btn">
	            		{{voiti}}
	            	</router-link>
	            </div>
<!--  -->
	            <div class="log-row" v-else-if="!acces">
	            	<p class="white-txt hidden-xs">{{ user.user_email }}</p>

	            	<div class="no-acces">
	            		<span class="mdi mdi-eye-off-outline" style="color: #f44336;"></span> 
	            		{{noAccess}}
	            	</div>
	            	<button class="shapka-btn logout"@click="logout">{{exit}}</button>
	            </div>

<!--  -->


			<div class="log-row" v-else>
	            	<p class="white-txt hidden-xs">{{ user.user_email }}</p>
	            	<router-link to="/course" tag="button" class="kabinet">
	            		<span class="mdi mdi-account-outline"></span>
	            		{{kabinet}}
	            	</router-link>
	            	<button class="shapka-btn logout"@click="logout">{{exit}}</button>
	            </div>




            </div>
        </div>
     </div>
</template>	


<script>
import {mapGetters, mapActions} from 'vuex'
	export default{
		data(){
			return{
				voiti: 'Войти',
				kabinet: 'Личный кабинет',
				exit: 'Выйти',
				noAccess: 'Нет подписки'
			}
		},
		computed: {
			...mapGetters({ user: "smeta/getUser", acces: "smeta/checkAcces" }),
		},
		methods: {
    		...mapActions({
      			singOut: "smeta/SIGN_OUT",
    		}),

	    	logout() {
	      		this.singOut().then(() => {
	        		this.$router.replace("/enter");
	      		});
	    	}
  		},
	}
</script>


<style>
	.kabinet{
		margin: 0 5px;
	    display: block;
	    padding: 6px 20px;
	    background: #2E97E6;
	    border-radius: 5px;
	    font-size: 14px;
	    line-height: 24px;
	    font-weight: 600;
	    cursor: pointer;
	}
</style>	




