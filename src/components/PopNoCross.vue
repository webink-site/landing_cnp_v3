<template>
    <div class="pop-n-cross" v-if="botPop">
        <div class="text-center">
            <svg data-v-15717af5="" data-v-850e14e4="" width="133" height="70" viewBox="0 0 133 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path data-v-15717af5="" data-v-850e14e4="" fill-rule="evenodd" clip-rule="evenodd" d="M79.5382 35.0015H114.026V17.5007H87.2678L68.6075 0H132.687V52.5022H90.469V70L34.4911 17.5007H18.6603V52.5022H45.425L64.0822 70H0V0H42.2176L79.5382 35.0015Z" fill="#EDEDED"></path></svg>
            <h2>Для завершения оплаты <br> добавьтесь в чат-бота</h2>
            <a target="_blank" href="https://t.me/nikitapugachevbot">
                 <button class="buy-btn" @click="closeBot">Добавиться в чат-бота</button>
            </a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            botPop: "smeta/getBotPop"
        })
    },
    methods: {
        closeBot(){
            this.$store.dispatch("smeta/changeBotType", false)
        }
    }
}
</script>
