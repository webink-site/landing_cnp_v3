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
                            <li>Доступ к лекциям курса</li>
                             <li>4 домашних задания</li>
                              <li>Доступ к сопроводительным материалам</li>
                               <li>Доступ к чату со студентами</li>
                                <li class="crossed">Индивидуальная проверка домашек</li>
                                <li class="crossed">Доступ к чату с кураторами</li>
                                <li class="crossed">Проверка выпускной работы от преподавателя</li>
                        </ul>
                        <div class="old-price">1 900 ₽</div>
                        <div class="price">990<p>₽</p></div>
                        <div class="buy-btn" @click="goPay(990)">Купить</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'

export default {
    computed: {
        ...mapGetters({user: "smeta/getUser"})
    },
    methods: {
        ...mapActions({
	    		// AUTH_REQUEST: "smeta/AUTH_REQUEST",
	    		UPDATE_TAGS: "smeta/UPDATE_TAGS",
	    	}),
        goPay(price){

                    if(!this.user){
                        this.$router.replace("/enter");
                        return
                    }

                let form = {
					user: this.user.user_email,
					cost: price
				}




				var widget = new cp.CloudPayments();
				const vm = this;

			      widget.pay(
			        "charge",
			        {
                        //  pk_09e30b3bb74a3dd0f764e8c8c1cd9   тест
			// pk_1ca6aec798da797a3092eea9157f7 бой
			 
			          publicId: "pk_09e30b3bb74a3dd0f764e8c8c1cd9",
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

                            vm.$store.dispatch("smeta/updateUser", res.data.user)

							// vm.UPDATE_TAGS(res.data.tags).then(() => {
							// 	vm.$router.replace("/see-you-on-4th-january");								 
							// });

						}).catch(error => alert(error))


			          },
			          onFail: function (reason, options) {},
			          onComplete: function (paymentResult, options) {},
			        }
			      );
			},
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
</style>