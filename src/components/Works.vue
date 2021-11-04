<template>
    <section id="works">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <h2 style="margin-bottom:10px;">Работы <br> с курса</h2>
                    <p class="big-bl">
                        Ты можешь также, все это возможно с помощью одного телефона в бесплатных приложениях.
                    </p>
                </div>
                <div class="col-lg-8">
                    <swiper ref="mySwiper" :options="swiperOptions" @slideChange="runOnChange">
                        
                        <swiper-slide >
                            <div class="video-box">
                                <iframe src="https://player.vimeo.com/video/605486734" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                            </div>
                        </swiper-slide> 
                        <swiper-slide >
                            <div class="video-box">
                                <iframe src="https://player.vimeo.com/video/605487077" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                            </div>
                        </swiper-slide>  
                        <swiper-slide >
                            <div class="video-box">
                                <iframe src="https://player.vimeo.com/video/633027460" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                            </div>
                        </swiper-slide>  
                        <swiper-slide >
                            <div class="video-box">
                                <iframe src="https://player.vimeo.com/video/632983861" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                            </div>
                        </swiper-slide>  
                        <swiper-slide >
                            <div class="video-box">
                                <iframe src="https://player.vimeo.com/video/632983797" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                            </div>
                        </swiper-slide>  


          
                    </swiper>
                    <div class="arrows">
                        <div class="btnPrev"></div>
                        <span>{{activeSlide}} / 5</span>
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
