<template>
    <section id="descr">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <h2>Часто <br>
                    задаваемые <br>
                    вопросы</h2>
                </div>
                <div class="col-lg-8">
                    <div class="ac-item" v-for="item in program" :class="{ activeAc : item.active }">
                        <div class="ac-title" @click="item.active = !item.active">
                            <h3>{{item.title}}</h3>
                            <img src="../assets/img/pluswh.svg" alt="">
                        </div>
                        <div class="ac-body">
                            <p class="black-txt" v-html="item.descr"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

export default{
    data(){
        return{
            program: [
                {
                    title: 'Сколько длится обучение на марафоне?',
                    active: false,
                    descr: '7 дней с даты старта + доступ останется на 30 дней.'
                },
                {
                    title: 'Как проходит общение с учениками?',
                    active: false,
                    descr: 'Все общение и поддержка проходит только на нашей платформе nikitapugachev.com. Если у вас есть вопросы по обучению вы можете задавать их в комментариях под соответствующим уроком или написать в службу поддержки.'
                },
                {
                    title: 'Можно купить сейчас, а пройти потом?',
                    active: false,
                    descr: 'Проходить марафон можно в любое удобное для вас время. Уроки будут доступны 30 дней после окончания обучения.'
                },
                {
                    title: 'Сколько времени нужно уделять учёбе?',
                    active: false,
                    descr: 'Уроки длятся от 5 до 25 минут. Закрепление информации и получение навыков напрямую зависит от прохождения практики.'
                },
                {
                    title: 'Если я не могу смотреть уроки в определённое время.',
                    active: false,
                    descr: 'Все уроки доступны в записи. Просматривать можно в любое удобное время на телефоне, планшете или компьютере. Лекции будут публиковаться строго по расписанию, однако, посмотреть их можно в любое время сразу после публикации.'
                },
                {
                    title: 'Как проходит обучение?',
                    active: false,
                    descr: '1. Записываетесь <br> Оставляете заявку на марафонпо мобильной съёмке видео<br><br> 2. Получаете доступ <br>Вам открывается доступ к онлайн-уроками на нашей платформе <br><br>3.Начинаете обучение <br>Готовитесь к съёмке и выполняете домашнее задание по нашим видеоурокам. Получаете обратную связь от автора марафона.'
                },
            ]
        }
    }
}
</script>


<style scoped>
.ac-title h3{
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    max-width: 80%;
}
.ac-body .black-txt{
    color: #fff;
}
.ac-item{
    border-bottom: 1px #d1d1d129 solid;
}
.ac-item:first-child {
    border-top: 1px #d1d1d129 solid;
}
</style>