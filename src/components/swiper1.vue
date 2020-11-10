<template>


  <section class="gallery">
    <swiper ref="mySwiper" :options="swiperOptions" class="slider">
      <swiper-slide v-for="img in images">
          <div class="slider-bg" :style="{'background-image': 'url(' + img + ')'}">
            <div class="container">
              <div class="col-lg-10">
                <h1>Процесс</h1>
                <br>
                  <p class="white-txt">Разбор на примерах, практика и еще раз практика. При разработке курса нам хотелось погрузить учеников в атмосферу, которая царит на съемочной площадке, поэтому мы отказались от скучных записей экрана и разбора теоретических знаний и провели полноценную съемку, на которой разобрали все вопросы и показали в действии.</p>
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
                  draggable: false,
                  loop: true,    
                  autoplay: {
                    delay: 4000,
                     disableOnInteraction: false
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
              'https://nikitapugachev.com/wp-content/uploads/2020/11/pr1.jpg',
              'https://nikitapugachev.com/wp-content/uploads/2020/11/pr2.jpg',
              'https://nikitapugachev.com/wp-content/uploads/2020/11/pr3.jpg',
              'https://nikitapugachev.com/wp-content/uploads/2020/11/pr4.jpg',
              'https://nikitapugachev.com/wp-content/uploads/2020/11/pr5.jpg',
              'https://nikitapugachev.com/wp-content/uploads/2020/11/pr6.jpg',
              'https://nikitapugachev.com/wp-content/uploads/2020/11/pr7.jpg',
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