<template>


  <section class="gallery">
    <swiper ref="mySwiper" :options="swiperOptions" class="slider">
      <swiper-slide v-for="img in images">
          <div class="slider-bg" :style="{'background-image': 'url(' + img + ')'}">
            <div class="container">
              <div class="col-lg-10">
                <h1>Коммерческие проекты</h1>
                <br>
                  <p class="white-txt">У нашей команды за плечами большое количество самых разных проектов, <br>постоянные съемки ставят новые сложные задачи, благодаря которым мы учимся <br>
                   и совершенствуем свои знания!</p>
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
               'https://nikitapugachev.ru/wp-content/uploads/2020/11/o1.jpg',
              'https://nikitapugachev.ru/wp-content/uploads/2020/11/o2.jpg',
              'https://nikitapugachev.ru/wp-content/uploads/2020/11/o3.jpg',
              'https://nikitapugachev.ru/wp-content/uploads/2020/11/o4.jpg',
              'https://nikitapugachev.ru/wp-content/uploads/2020/11/o5.jpg',
              'https://nikitapugachev.ru/wp-content/uploads/2020/11/o6.jpg',
              'https://nikitapugachev.ru/wp-content/uploads/2020/11/o7.jpg',
              'https://nikitapugachev.ru/wp-content/uploads/2020/11/o8.jpg',
              'https://nikitapugachev.ru/wp-content/uploads/2020/11/o9.jpg',
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