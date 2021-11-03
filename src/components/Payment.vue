<template>
    <section id="payment">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Оплата</h2>
                    <div class="sale">Скидка 50% на курс месяца</div>
                </div>
                <div class="col-lg-4 col-lg-offset-4">
                    <div class="price-box">
                        <h3>Ученик</h3>
                        <ul>
                            <li>Доступ к 26 лекциям</li>
                             <li>4 домашних задания</li>
                              <li>Обратная связь и поддержка</li>
                               <li>Доступ к сопроводительным материалам</li>
                               <li>Доступ к общему чату со студентами школы</li>
<!--                            <li class="crossed">Индивидуальная проверка домашек</li>
                                <li class="crossed">Доступ к чату с кураторами</li>
                                <li class="crossed">Проверка выпускной работы от преподавателя</li> -->
								<p style="display:none;">{{changePrices}}</p>
                        </ul>
                        <div class="old-price">{{oldPrice}} ₽</div>
                        <div class="price">{{regularPrice}}<p>₽</p></div>

                         <div v-if="!user" id="mailView">

                                <input type="text" placeholder="Почта" v-model="name" @input="getCheck()"
                                :class="{errorInp : ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.email), 'chmark' : checkmark}">
                        </div>



                        <div class="buy-btn" v-if="acces" style=" cursor: not-allowed;">Приобретено</div>
                        <div class="buy-btn" v-else @click="startPay(regularPrice)">Купить</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
	
    data(){
		return{
			name: '',
			checkmark: false,
			regularPrice: 0,
			oldPrice: 0
		}
	},
	validations: {	
		name: {
			required, 
			email
		}
	},
    computed: {
        ...mapGetters({
            user: "smeta/getUser",
            acces: "smeta/checkAcces"
        }),
		changePrices(){
			let price = parseInt(this.$route.path.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''))
			console.log(price)

			if(price == 1990){
				this.regularPrice = 1990
				this.oldPrice = 3980
			}else if(price == 2990){
				this.regularPrice = 2990
				this.oldPrice = 5990
			}else if(price == 3990){
				this.regularPrice = 3990
				this.oldPrice = 7980
			}else{
				this.regularPrice = 990
				this.oldPrice = 1990
			}

			return this.regularPrice
		}
    },
    methods: {
        ...mapActions({
	    	AUTH_REQUEST: "smeta/AUTH_REQUEST",
	    	UPDATE_TAGS: "smeta/UPDATE_TAGS",
            updateUser: "smeta/updateUser"
	    }),
        getCheck(){
			if(this.$v.name.$invalid) {
				this.$v.name.$touch();
				this.checkmark = false
				return
			}else{
				this.checkmark = true
			}
		},
        startPay(param){

            fbq('track', 'InitiateCheckout_mob_video');
			ym(86233447, 'reachGoal', 'Initiate_checkout_mob_video');

				if(this.user){
					console.log('вы авторизированные, идем платить')

					let form = {
						user: this.user.user_email,
						cost: param,
					}

					this.goPay(form)
					return
				}else{

                    if(this.$v.name.$invalid) {
                        this.$v.name.$touch();
                        let mailView = document.querySelector('#mailView')
                        mailView.scrollIntoView({block: "center", behavior: "smooth"});
                        return;
				    }

                    let form = {
						user: this.name,
						cost: param,
					}

				    this.goPayNew(form)

                }

				
				
			},
            goPay(form){

				var widget = new cp.CloudPayments();
				const vm = this;

			      widget.pay(
			        "charge",
			        {
                        //  pk_09e30b3bb74a3dd0f764e8c8c1cd9   тест
			// pk_2b89f85b8a1d9118c9e5b7b7a0c24 бой
			 
			          publicId: "pk_2b89f85b8a1d9118c9e5b7b7a0c24",
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

			          	fbq('track', 'Purchase_mob_video', {currency: "RUB", value: form.cost});
						ym(86233447, 'reachGoal', 'purchase_mob_video');

			            axios
						.post('https://nikitapugachev.ru/wp-json/np/v1/change/usertype', form)
						.then(res =>{

                            // vm.$store.dispatch("smeta/updateUser", res.data.user)

							vm.updateUser(res.data.user).then(() => {
								vm.$router.replace("/course");								 
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
			          publicId: "pk_2b89f85b8a1d9118c9e5b7b7a0c24",
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

                            fbq('track', 'Purchase_mob_video', {currency: "RUB", value: form.cost});
							ym(86233447, 'reachGoal', 'purchase_mob_video');

			          		axios
							.post('https://nikitapugachev.ru/wp-json/np/v1/change/usertype', form)
							.then(res =>{

								if(res.data.status_user === 'Пользователь не найден, создаем нового' ){
									alert('Ваш пароль отправлен на почту ' + form.user)
									
									let userDate = {
										username: form.user,
				        				password: res.data.password,
									}
									
									
									 vm.AUTH_REQUEST(userDate).then(() => {
								        vm.$router.replace("/course");
								      });

								}else{
									 vm.$router.replace("/success");
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
h2{
    margin-bottom: 20px;
}
.sale{
    margin: 0 auto;
    margin-bottom: 20px;
}
	input{
	background-color: #fff;
	font-size: 14px;
	font-weight: 600;
    color: #111;
    line-height: 140%;
    height: 50px;
    width: 100%;
    padding: 15px 16px;
    border: none;
    margin-bottom: 10px;
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