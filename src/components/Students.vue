<template>
    <section id="students">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 style="margin-bottom:10px;">Работы <br> студентов</h2>
                    <p class="big-wh">
                        Наши знания успешно применяют ученики из самых разных стран мира: Россия, Южная Корея, США, Китай, Украина, Казахстан, Беларусь, Чехия, Индонезия, Испания, Саудовская Аравия и многие другие. Мы следим за трендами и постоянно выпускаем актуальные марафоны чтобы вы могли развиваться и расти.
                    </p>
                </div>
                <div class="col-lg-6">
                    <swiper ref="mySwiper" :options="swiperOptions" @slideChange="runOnChange">
                        <swiper-slide >
                            <div class="video-box">
                                <iframe src="https://player.vimeo.com/video/493257626" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                            </div>
                        </swiper-slide> 
                        <swiper-slide >
                            <div class="video-box">
                                <iframe src="https://player.vimeo.com/video/526221342" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                            </div>
                        </swiper-slide> 
                        <swiper-slide >
                            <div class="video-box">
                                <iframe src="https://player.vimeo.com/video/526216916" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                            </div>
                        </swiper-slide>  
                        <swiper-slide >
                            <div class="video-box">
                                <iframe src="https://player.vimeo.com/video/526505508" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                            </div>
                        </swiper-slide>   

          
                    </swiper>
                    <div class="arrows">
                        <div class="btnPrev"></div>
                        <span>{{activeSlide}} / 4</span>
                        <div class="btnNext"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data(){
        return{
            activeSlide: 1,
            swiperOptions: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  draggable: true,
                  loop: false,    
                  infinite: true,
                  speed: 600,
                  navigation: {
                    nextEl: '.btnNext',
                    prevEl: '.btnPrev',
                  },
            },
        }
    },
    methods: {
        runOnChange(){
            this.activeSlide = this.$refs.mySwiper.$swiper.activeIndex + 1
        }
    },
    mounted(){
        this.activeSlide = this.$refs.mySwiper.$swiper.activeIndex + 1
    }
}
</script>
