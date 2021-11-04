<template>
<div>

    <section id="main">
        <div class="bgfon">
            <iframe src="https://player.vimeo.com/video/639909245?h=00bc65a83f&loop=1&autopause=0&amp;byline=false&amp;controls=false&amp;fun=false&amp;muted=true&amp;portrait=false&amp;title=false&amp;autoplay=true&amp;transparent=true&amp;gesture=media" allowtransparency allow="autoplay" class="bg-video__player hidden-lg hidden-md hidden-sm"></iframe>
        </div>


        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="course-bg">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="sale">Скидка 50% на курс месяца</div>
                                <h1>Научитесь снимать крутые видео на телефон за 7 дней</h1>
                                <p style="margin-bottom:20px;"><strong>Узнай все, основы качественной съёмки и создания видеоэффектов на <br>
                                    мобильный. Монтаж и обработка на телефоне iOS/Android.</strong> </p>
                                <button class="vio-btn" v-scroll-to="'#payment'">Записаться со скидкой</button>
                            </div>
                             <div class="col-lg-5 col-lg-offset-1">
                                <div class="main-video hidden-xs hidden-sm">
                                    <iframe src='https://player.vimeo.com/video/639909245?h=00bc65a83f&loop=1&autopause=0&amp;byline=false&amp;controls=false&amp;fun=false&amp;muted=true&amp;portrait=false&amp;title=false&amp;autoplay=true&amp;transparent=true&amp;gesture=media' frameborder='0' webkitAllowFullScreen="false" mozallowfullscreen="false" allowFullScreen="false"></iframe>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="icon-box">
                                    <img src="../assets/img/mi1.svg" alt="">
                                    <div>
                                        <h3>Начало обучения</h3>
                                        <p>{{getTomorrow}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="icon-box">
                                    <img src="../assets/img/mi2.svg" alt="">
                                    <div>
                                        <h3>Длительность</h3>
                                        <p>7 дней</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="icon-box">
                                    <img src="../assets/img/mi3.svg" alt="">
                                    <div>
                                        <h3>Практика</h3>
                                        <p>24 лекций </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="icon-box">
                                    <img src="../assets/img/mi4.svg" alt="">
                                    <div>
                                        <h3>Что нужно</h3>
                                        <p>Для прохождения нужен только телефон</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>


<script>

export default{
    data(){
       return{
            curentDate: new Date() 
       }
    },
    computed :{
        getTomorrow(){
            var today = new Date();
            var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
            console.log()
            return tomorrow.toLocaleString('ru', { month: 'long', day: 'numeric'})
        }
    }
}
</script>
