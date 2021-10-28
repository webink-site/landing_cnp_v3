<template>
    <section id="reviews">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Отзывы</h2>
                </div>
               
                <div class="col-lg-4" v-for="item in reviews.slice(0, revAmount)" v-if="reviews.length">
                    <div class="review-box">
                        <div class="review-title-box">
                            <img :src="item.img" alt="">
                            <div>
                                <h4>{{item.name}}</h4>
                                <div class="small-grey">{{item.inst}}</div>
                            </div>
                        </div>
                        <p class="rev-txt" v-html="item.text"></p>
                    </div>
                </div>
                
                <div class="col-lg-12 text-center" v-if="revAmount <= reviews.length ">
                    <button class="show-more" @click="addAmount">Показать еще</button>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            reviews: "reviews/getReviews"
        })
    },
    data(){
        return{
            revAmount: 3
        }
    },
    methods: {
        addAmount(){
            this.revAmount += 3
        }
    }
}
</script>
