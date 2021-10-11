<template>
	 <section class="price" id="price">
        <div class="container">
            <h1 class="price__title">Тарифы и стоимость</h1>

            <div class="row fadeIn" v-if="!user" id="mailView">
            	<div class="col-lg-4">

            		<label for="">Заполните поле для покупки</label>
					<input type="text" placeholder="Почта" v-model="name" @input="getCheck()"
					:class="{errorInp : ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.email), 'chmark' : checkmark}">
					<!-- <img src="../assets/img/checkmark.svg" class="chmark"> -->
				</div>
            </div>

            <div class="row">
                <div class="col-xl-4 price__box-item price__first-box wow">
                    <small class="item__subheader">Тариф</small>
                    <h3 class="item__title">Слушатель</h3>

                    <div class="prices">
                        <!-- <p class="old-price">6 990</p> -->
                        <p class="sale-price">6 990 ₽</p>
                    </div>

                    <div class="learn__item-descr">Повышение цены 28 декабря</div>

                    <a class="item__btn-link" @click="startPay(6990)">Купить</a>
                    <ul class="item__text-block">
                        <li><p>Доступ ко всем 45 урокам</p></li>
                        <li><p>Доступ к вебинарам с разбором лучших работ участников на предмет ошибок</p></li>
                        <li><p>Возможность просматривать уроки в любое время</p></li>
                        <li><p>Доступ к урокам с любого устройства</p></li>
                        <li><p>Закрытый чат для участников</p></li>
                        <li><p class="item__text-block--blue-text">Участник выполняет задание самостоятельно, без обратной связи от куратора курса</p></li>
                    </ul>
                </div>
                <div class="col-xl-4 price__box-item price__second-box wow">
                    <small class="item__subheader">Тариф</small>
                    <h3 class="item__title">Ученик</h3>

                    <div class="prices">
                        <!-- <p class="old-price">12 990</p> -->
                        <p class="sale-price">12 990 ₽</p>
                    </div>

                    <div class="learn__item-descr">Повышение цены 28 декабря</div>

                    <a class="item__btn-link" @click="startPay(12990)">Купить</a>
                    <ul class="item__text-block">
                        <li><p>Доступ ко всем 45 урокам</p></li>
                        <li><p>Вебинары с разбором лучших работ участников на предмет ошибок</p></li>
                        <li><p>Обратная связь и проверка домашнего задания куратором курса</p></li>
                        <li><p>Возможность просматривать уроки в любое время</p></li>
                        <li><p>Доступ к урокам с любого устройства</p></li>
                        <li><p>Закрытый чат для участников</p></li>
                        <li><p>Доступ ко всем отснятым материалам курса для личного использования</p></li>
                        <li><p>Библиотека звуков и музыкальных треков из роликов</p></li>
                        <li><p>Сертификат о прохождении курса</p></li>
                        <li><p>Доступ в закрытый чат после прохождения курса</p></li>
                        <li><p class="item__text-block--blue-text">Участник выполняет задание и получает обратную связь от куратора курса в общем чате</p></li>
                    </ul>
                </div>
                <div class="col-xl-4 price__box-item price__third-box wow">
                    <small class="item__subheader">Тариф</small>
                    <h3 class="item__title">Персональный</h3>

                    <div class="prices">
                        <!-- <p class="old-price">29 990</p> -->
                        <p class="sale-price">29 990 ₽</p>
                    </div>

                    <div class="learn__item-descr">Повышение цены 28 декабря</div>

                    <a class="item__btn-link" @click="startPay(29990)">Купить</a>
                    <ul class="item__text-block">
                        <li><p>Доступ ко всем 45 урокам</p></li>
                        <li><p>Вебинары с разбором работ участников на предмет ошибок</p></li>
                        <li><p>Персональный разбор всего проекта в конце обучения, на предмет ошибок</p></li>
                        <li><p>Возможность просматривать уроки в любое время</p></li>
                        <li><p>Доступ к урокам с любого устройства</p></li>
                        <li><p>Закрытый чат для участников</p></li>
                        <li><p>Доступ ко всем отснятым материалам курса для личного использования</p></li>
                        <li><p>Библиотека звуков и музыкальных треков из роликов</p></li>
                        <li><p>Доступ в закрытый чат после прохождения курсаv</p></li>
                        <li><p>Сертификат о прохождении курса</p></li>
                        
                        <li><p class="item__text-block--blue-text">Персональный разбор всех вопросов по курсу, помощь в подготовке съемке, постановке света и обработке материала</p></li>
                        <li><p class="item__text-block--blue-text">Две получасовые конференции с разбором вопросов ученика</p></li>
                    </ul>
                </div>
            </div>
        </div>
  	</section>

</template>


<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import axios from 'axios'
import {mapActions, mapState, mapGetters} from 'vuex'

	export default{
		data(){
			return{
				name: '',
				checkmark: false
			}
		},
		validations: {	
			name: {
				required, 
				email
			}
		},
		computed: {
			...mapGetters({user: "smeta/getUser"})
		},
		methods: {
			getCheck(){
				if(this.$v.name.$invalid) {
					this.$v.name.$touch();
					this.checkmark = false
					return
				}else{
					this.checkmark = true
				}
			},
			...mapActions({
	    		AUTH_REQUEST: "smeta/AUTH_REQUEST",
	    		UPDATE_TAGS: "smeta/UPDATE_TAGS",
	    	}),
			startPay(param){

				if(this.user){
					console.log('вы авторизированные, идем платить')

					let form = {
						user: this.user.user_email,
						cost: param,
						tag: 'FOOD2'
					}

					this.goPay(form)
					return
				}

				if(this.$v.name.$invalid) {
					this.$v.name.$touch();
					let mailView = document.querySelector('#mailView')
					mailView.scrollIntoView({block: "center", behavior: "smooth"});
					return;
				}


				let form = {
					user: this.name,
					cost: param,
					tag: 'FOOD2'
				}

				this.goPayNew(form)
				
			},

// оплата

			goPay(form){
				var widget = new cp.CloudPayments();
				const vm = this;

			      widget.pay(
			        "charge",
			        {
			 
			          publicId: "pk_1ca6aec798da797a3092eea9157f7",
			          description: "Покупка курса за: " + form.cost + "₽",
			          amount: form.cost,
			          currency: "RUB",
			          accountId: form.user,
			          skin: "mini",
			          data: {
			            myProp: "myProp value",
			          },
			        },
			        {
			          onSuccess: function (options) {

			          	// console.log(form)
			          	// return
			            axios
						.post('https://nikitapugachev.ru/wp-json/np/v1/change/usertype', form)
						.then(res =>{

							vm.UPDATE_TAGS(res.data.tags).then(() => {
								vm.$router.replace("/see-you-on-4th-january");								 
							});

						}).catch(error => alert(error))


			          },
			          onFail: function (reason, options) {},
			          onComplete: function (paymentResult, options) {},
			        }
			      );
			},
// оплата новый
			goPayNew(form){
				var widget = new cp.CloudPayments();
				const vm = this;

			      widget.pay(
			        "charge",
			        {
			          publicId: "pk_1ca6aec798da797a3092eea9157f7",
			          description: "Покупка курса за: " + form.cost + "₽",
			          amount: form.cost,
			          currency: "RUB",
			          accountId: form.user,
			          skin: "mini",
			          data: {
			            myProp: "myProp value",
			          },
			        },
			        {
			          onSuccess: function (options) {

			          	 

			          		axios
							.post('https://nikitapugachev.ru/wp-json/np/v1/change/usertype', form)
							.then(res =>{

								if(res.data.status_user === 'Пользователь не найден, создаем нового' ){
									alert('Ваш пароль отправлен на почту ' + form.user)
									
									let userDate = {
										username: form.user,
				        				password: res.data.password,
									}
									console.log(userDate)
									
									 vm.AUTH_REQUEST(userDate).then(() => {
								        vm.$router.replace("/see-you-on-4th-january");
								 
								      });

								}else{
									vm.$router.replace("/enter");
								}
								
							}).catch(error => alert(error))

			          },
			          onFail: function (reason, options) {},
			          onComplete: function (paymentResult, options) {
			          	
				          	if(paymentResult.success){
								console.log(paymentResult)
				          	}else{
				          		return
				          	}

			          },
			        }
			      );
			}

		}
	}
</script>




<style scoped>
	input{
	background-color: #fff;
	font-size: 14px;
	font-weight: 600;
    color: #111;
    line-height: 140%;
    height: 50px;
    width: 94%;
    padding: 15px 16px;
    border: none;
    margin-bottom: 20px;
    border-radius: 5px;
    border:2px #fff solid;
    transition: all .2s ease;
	}
	input[type="password"]{
		margin-bottom: 15px;
	}
	.small-grey{
		margin-bottom: 15px;
	}
	.errorInp{
		border:2px #f44336 solid!important;
	}
	.chmark{
		background-size: 20px;
		background-image: url(../assets/img/checkmark.svg);
		background-position: right 10px center;
		background-repeat: no-repeat;
	}
</style>