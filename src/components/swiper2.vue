<template>


  <section class="gallery">
    <swiper ref="mySwiper" :options="swiperOptions" class="slider">
      <swiper-slide v-for="img in images">
          <div class="slider-bg" :style="{'background-image': 'url(' + img + ')'}">
            <div class="container">
              <div class="col-lg-6">
                <h1>Кадры с курса</h1>
                <br>
                  <p class="white-txt">Почти половина материала отснята на камеру телефона. <br>
Мы сделали это нарочно, чтобы показать, что можно снимать <br>
яркие и красивые кадры без сложной и дорогостоящей техники!</p>
              </div>
            </div>
          </div>
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
</section>



</template>


<script>
import {mapState} from 'vuex'

export default{
    data(){
        return{
            swiperOptions: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  draggable: true,
                  loop: true,    
                  autoplay: {
                    delay: 2000,
                  },
                  infinite: true,
                  effect: 'fade',
                  speed: 600,
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
            },
            images: [
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k1.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k2.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k3.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k4.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k5.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k6.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k7.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k8.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k9.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k10.jpg',
               'https://nikitapugachev.com/wp-content/uploads/2020/11/k11.jpg',
            ]
        }  
    },
    computed: {
        swiper(){
            return this.$refs.mySwiper.$swiper
        }
    }
}
</script>


<style>
  .slider-bg{
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 800px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 40px;
  }
  .swiper-button-prev{
    background-image: url(../assets/img/arr.svg);
    background-position: center;
    background-repeat: no-repeat;
    height: 50px!important;
    width: 50px!important;
    border-radius: 50px;
    background-color: #262626;
  }
  .swiper-button-next{
    background-image: url(../assets/img/arr.svg);
    transform: rotate(180deg);
    background-position: center;
    background-repeat: no-repeat;
    height: 50px!important;
    width: 50px!important;
    border-radius: 50px;
    background-color: #262626;
  }
</style>