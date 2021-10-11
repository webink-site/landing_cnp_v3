<template>
	
<section class="program">
    <div class="program__container container ">
        <h1 class="program__title wow">Программа обучения</h1>

        <div class="program__accordions">
            <div class="program__accordion-basics accordion wow">
                <h2 class="program__accordion-title">Основы</h2>

                <div class="accordion__item" v-for="(item, index) in osnovas"
                :key="index" 
                :class="{active : item.active}" 
                @click="changeAccordion(index)">
                    <div class="accordion__header">
                        <h3 class="accordion__header-title">{{item.title}}</h3>
                        <div class="accordion__header-icon"><img src="https://nikitapugachev.ru/wp-content/themes/np/assets/img/plus.svg" alt="plus"></div>
                    </div>
                    <div class="accordion__body">
                        <p class="accordion__body-text">{{item.descr}}</p>
                    </div>
                
                </div>

            <div class="col-lg-12 text-center" style="cursor:pointer;" @click="moreProgram()" v-if="!programCount">
                   <p> <span class="blue-text text-center">Посмотреть всю программу</span> <br> 
                    <img src="../assets/img/bluearr.svg" class="bluearr"></p>
                </div>
            </div>
        </div>



       


            <div class="program__accordions" v-if="programCount">
            <div class="program__accordion-basics accordion wow">
                <h2 class="program__accordion-title">Съемка</h2>

                <div class="accordion__item" v-for="(item, index) in semka"
                :key="index" 
                :class="{active : item.active}" 
                @click="changeAccordion2(index)">
                    <div class="accordion__header">
                        <h3 class="accordion__header-title">{{item.title}}</h3>
                        <div class="accordion__header-icon"><img src="https://nikitapugachev.ru/wp-content/themes/np/assets/img/plus.svg" alt="plus"></div>
                    </div>
                    <div class="accordion__body">
                        <p class="accordion__body-text">{{item.descr}}</p>
                    </div>
                
                </div>
            </div>
        </div>






            <div class="program__accordions" v-if="programCount">
            <div class="program__accordion-basics accordion wow">
                <h2 class="program__accordion-title">Постпродакшн</h2>

                <div class="accordion__item" v-for="(item, index) in postprod"
                :key="index" 
                :class="{active : item.active}" 
                @click="changeAccordion3(index)">
                    <div class="accordion__header">
                        <h3 class="accordion__header-title">{{item.title}}</h3>
                        <div class="accordion__header-icon"><img src="https://nikitapugachev.ru/wp-content/themes/np/assets/img/plus.svg" alt="plus"></div>
                    </div>
                    <div class="accordion__body">
                        <p class="accordion__body-text">{{item.descr}}</p>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</section>
</template>


<script>
import {mapState} from 'vuex'
	export default{
		data(){
	        return{
	            programCount: false
	        }
    	},
    	computed: {
    		...mapState('inline', ['osnovas', 'semka', 'postprod'])
    	},
    	methods: {
    		moreProgram(){
            	this.programCount = true
        	},
        	changeAccordion(index, osnovas){
			this.osnovas.forEach(item =>{
				item.active = false
				})
				this.osnovas[index].active = !this.osnovas[index].active
			},
			changeAccordion2(index){
				this.semka.forEach(item =>{
					item.active = false
				})
				this.semka[index].active = !this.semka[index].active
			},
			changeAccordion3(index){
				this.postprod.forEach(item =>{
					item.active = false
				})
				this.postprod[index].active = !this.postprod[index].active
			},
    	}
	}
</script>