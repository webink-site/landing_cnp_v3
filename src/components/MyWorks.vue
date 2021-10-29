<template>
    <section id="myworks" v-if="videos.length">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Работы</h2>
                </div>
                <div class="col-lg-6" v-for="item in videos" >
                    <div class="video-box">
                        <iframe :src="`https://player.vimeo.com/video/${item[0].id}`" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%"></iframe>
                    </div>
                    <div class="video-title">
                        {{item[0].title}}
                    </div>
                    <p class="small-grey">
                        New
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            videos: []
        }
    },
    created(){
            axios
             .get('https://nikitapugachev.ru/wp-json/np/v1/get/videomain')
             .then(res =>{
                console.log(res.data.data)
                this.videos = res.data.data
            })
    }
}
</script>
