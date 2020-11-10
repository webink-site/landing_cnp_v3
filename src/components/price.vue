<template>
	 <section class="price" id="price">
        <div class="container">
            <h1 class="price__title  wow">Тарифы и стоимость</h1>

            <div class="row wow fadeIn" v-if="!user" id="mailView">
            	<div class="col-lg-4">

            		<label for="">Регестрируйтесь или введите почту</label>
					<input type="text" placeholder="Почта" v-model="name" 
					:class="{errorInp : ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.email)}">

				</div>
            </div>

            <div class="row">
                <div class="col-xl-4 price__box-item price__first-box wow">
                    <small class="item__subheader">Тариф</small>
                    <h3 class="item__title">Слушатель</h3>

                    <div class="prices">
                        <p class="old-price">6 990</p>
                        <p class="sale-price">4 990 ₽</p>
                    </div>

                    <div class="learn__item-descr">До 1 декабря выгода 2 000 ₽</div>

                    <a class="item__btn-link" @click="startPay(4990)">Купить</a>
                    <ul class="item__text-block">
                        <li><p>Доступ ко всем урокам курса</p></li>
                        <li><p>Разбор некоторых работ участников курса на онлайн-конференции</p></li>
                        <li><p>Сертификат о прохождении курса</p></li>
                        <li><p class="item__text-block--blue-text">Участник выполняет задание самостоятельно, без обратной связи от куратора курса</p></li>
                    </ul>
                </div>
                <div class="col-xl-4 price__box-item price__second-box wow">
                    <small class="item__subheader">Тариф</small>
                    <h3 class="item__title">Ученик</h3>

                    <div class="prices">
                        <p class="old-price">12 990</p>
                        <p class="sale-price">9 990 ₽</p>
                    </div>

                    <div class="learn__item-descr">До 1 декабря выгода 3 000 ₽</div>

                    <a class="item__btn-link" @click="startPay(9990)">Купить</a>
                    <ul class="item__text-block">
                        <li><p>Доступ ко всем урокам курса</p></li>
                        <li><p>Разбор некоторых работ участников курса на онлайн-конференции</p></li>
                        <li><p>Сертификат о прохождении курса</p></li>
                        <li><p class="item__text-block--blue-text">Участник выполняет задание и получает обратную связь от куратора курса в закрытом чат со всеми участниками тарифа  “Расширенный” и “Персональный”</p></li>
                        <li><p>Закрытый чат со всеми участниками   тарифа “Расширенный” и “Персональный”</p></li>
                        <li><p>Разбор роликов на онлайн-конференции со всеми участниками тарифа “Расширенный” и “Персональный”</p></li>
                    </ul>
                </div>
                <div class="col-xl-4 price__box-item price__third-box wow">
                    <small class="item__subheader">Тариф</small>
                    <h3 class="item__title">Персональный</h3>

                    <div class="prices">
                        <p class="old-price">29 990</p>
                        <p class="sale-price">19 990 ₽</p>
                    </div>

                    <div class="learn__item-descr">До 1 декабря выгода 10 000 ₽</div>

                    <a class="item__btn-link" @click="startPay(19990)">Купить</a>
                    <ul class="item__text-block">
                        <li><p>Доступ ко всем урокам курса</p></li>
                        <li><p>Разбор некоторых работ участников курса на онлайн-конференции</p></li>
                        <li><p>Сертификат о прохождении курса</p></li>
                        <li><p class="item__text-block--blue-text">Участник выполняет задание и    получает персональную поддержку и обратную связь от куратора курса в личном чате</p></li>
                        <li><p>Закрытый чат со всеми участниками   тарифа “Расширенный” и “Персональный”</p></li>
                        <li><p>Разбор роликов на онлайн-конференции со всеми участниками тарифа “Расширенный” и “Персональный”</p></li>
                        <li><p>Персональный разбор всех вопросов по курсу, помощь в подготовке съемки и постановке света, обработке материала</p></li>
                        <li><p>Доступ на время курса к   дополнительным обучающим    материалам</p></li>
                        <li><p>Персональный разбор всего проекта в конце обучения, на предмет ошибок и рекомендаций</p></li>
                        <li><p>Персональный чат с куратором курса</p></li>
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
			...mapActions({
	    		AUTH_REQUEST: "smeta/AUTH_REQUEST",
	    	}),
			startPay(param){

				if(this.user){
					console.log('вы авторизированные, идем платить')

					let form = {
						user_email: this.user.user_email,
						cost: param
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
					cost: param
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
			          accountId: form.user_email,
			          skin: "mini",
			          data: {
			            myProp: "myProp value",
			          },
			        },
			        {
			          onSuccess: function (options) {

			          	console.log(form)

			            axios
						.post('https://nikitapugachev.com/wp-json/np/v1/change/usertype', form)
						.then(res =>{
							vm.$router.replace("/enter");

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

			          	 alert('Ваш пароль отправлен на почту ' + form.user)

			          		axios
							.post('https://nikitapugachev.com/wp-json/np/v1/change/usertype', form)
							.then(res =>{

								if(res.data.status_user === 'Пользователь не найден, создаем нового' ){
									let userDate = {
										username: form.user,
				        				password: res.data.password,
									}
									console.log(userDate)
									
									 vm.AUTH_REQUEST(userDate).then(() => {
								        vm.$router.replace("/course");
								 
								      });

								}else{
									return
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
</style>