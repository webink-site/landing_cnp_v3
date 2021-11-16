<template>
	<div>
		<PopNoCross />
		<section id="coursepage" v-if="videos.length">
		<div class="container-fluid"> 
			<!-- wide-container -->
			<div class="sad">
				<div class="col-lg-8 col-md-8">

				<iframe :src="`https://player.vimeo.com/video/${videoLink}`" width="100%" webkitallowfullscreen frameborder="0" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen" id="videplayer"></iframe>
				
			
			</div>
			<div class="col-lg-4 col-md-4 no-pad">
				<a href="https://t.me/nikitapugachevbot" target="_blank">
					<button class="tg-btn">
						<img src="../assets/img/tg.svg" alt="">
						<span>Написать куратору в Telegram</span>
					</button>
				</a>
				<div class="under-scroll">
					<h3>Марафон по съёмке и монтажу видео на телефоне</h3>
				<div class="learn__item-descr">{{videos.length}} Уроков • 
					{{Math.floor(globalTime / 60 / 60)}} часа {{Math.floor(globalTime / 60) - ((Math.floor(globalTime / 60 / 60)) * 60)}} мин</div>
					<p class="blue-link">
						<a href="https://docs.google.com/document/d/1BhjNrg0749XkHqaPAzxEANPTaTIVwr0j3rR87MPw4fw/edit#heading=h.zgh1yjrnlak8">Ознакомительный список оборудования</a>
					</p>
				</div>
				<div class="less-scroll-row">
					<div class="lesson-btn" 
					v-for="(lesson, index) in videos" 
					:key="index"
					:class="{actLesson: lesson.active}"
					@click="changeLesson(index)"> 
						<div class="lesson-title">
							<p v-if="lesson.name.length > 33">{{index + 1}}.  {{lesson.name.substring(0,28)+"..."}}</p>
							<p v-else>{{index + 1}}.  {{(lesson.name)}}</p>
						</div>

						<p> {{Math.floor(lesson.duration / 60)}}:{{lesson.duration % 60}}</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	</section>

	<div class="preloader" v-else>
		<div class="text-center">
			<loading />
			<h3>Загружаем видео</h3>
		</div>
	</div>

</div>
</template>


<script>
import {mapState, mapGetters} from 'vuex'
import axios from 'axios'
import loading from '../components/loading.vue';
import PopNoCross from '../components/PopNoCross.vue'

var elem = document.getElementById("myvideo");

	export default{
  components: { loading, PopNoCross },
		methods: {
			changeLesson(index){
				this.videos.forEach(item =>{
					item.active = false
				})
				this.videos[index].active = true

				let newLink = this.videos[index].uri
				this.videoLink = newLink.replace("/videos/", "");
			},
		},
		created(){

			const lVideos = JSON.parse(localStorage.getItem("lVideos"))
			

			if(lVideos){
				this.videos = lVideos
				this.videos.forEach(item =>{
					this.globalTime += item.duration
				})
				
			}else{
				axios
				.get('https://nikitapugachev.ru/wp-json/np/v1/get/mvideos')
				.then(res =>{
					this.videos = res.data.data
					localStorage.setItem("lVideos", JSON.stringify(res.data.data));
					this.videos.forEach(item =>{
						this.globalTime += item.duration
					})
				})
			}
		},
		computed:{
			...mapState('smeta', ['lessons']),
			...mapGetters({ 
				user: "smeta/getUser",
			}),
		},
		data(){
			return{
				videos: [],
				videoLink: 618317658,
				globalTime: null
			}
		}
	}
</script>


<style scoped>
	.core-sceemer{
		position: relative;
	}
	.watermark{
		position: absolute;
		top:calc(50% - 15%);
		left: 0;
		background-color: red;
		opacity: .2;
		content: '';
		width: 100%;
		height: 30%;
		z-index: 2000;
		background-repeat: no-repeat!important;
		background-position: center!important;
		background-size: 70%!important;
		background-color: none!important;
	}
	.volume-control .btn-control-panel .progress{
		overflow: inherit!important;
	}
	.volume-control .btn-control-panel .progress .volume-current .thumb-drag{
		opacity: 1!important;
	}
	.volume-control .btn-control-panel .progress:hover{
		overflow: visible!important;
	}

#coursepage{
	padding: 40px 0;
	min-height: calc(100vh - 123px);
}
.preloader{
	padding: 40px 0;
	min-height: calc(100vh - 123px);
}
#coursepage .sad .col-lg-8{
	padding-left: 0;
	padding-right: 0;
}
.learn__item-descr{
	margin: 10px 0;
}
.under-scroll{
	padding-left: 22px;
}
.lesson-btn{
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	background-color: transparent;
	border:none;
	padding: 13px 22px;
	transition: all .3s ease-in-out;
	cursor: pointer;
}
.actLesson{
	background-color: #2E97E6;
}
.lesson-btn p{
	font-size: 16px;
	font-weight: 600;
}
#videplayer{
	width: calc(100% - 20px);
	min-height: 500px;
}
.lesson-title{
	overflow:hidden;
	max-width: 85%;
}
.lesson-title p{
	white-space: nowrap;
}
.wide-container {
    max-width: 1410px;
}

.less-scroll-row{
	overflow-y: scroll !important;
	height: 400px !important;
	padding-right: 10px !important;
}







.less-scroll-row::-webkit-scrollbar {
	width: 3px;
	margin-left: 15px;
	border-radius: 5px;
	border:none;
}

/* Track */
.less-scroll-row::-webkit-scrollbar-track {
	background: #1A1A1A;
	border-radius: 3px;
}

/* Handle */
.less-scroll-row::-webkit-scrollbar-thumb {
	background: #2E97E6;
	border-radius: 3px;
}

/* Handle on hover */
.less-scroll-row::-webkit-scrollbar-thumb:hover {
	background: #1A1A1A;
	border-radius: 3px;
}




@media (max-width: 1025px) {
	#coursepage{
		padding: 0;
	}
	#videplayer{
		width: 100%;
		min-height: 550px;
	}
}
@media (max-width: 786px) {
	#coursepage{
		padding: 0;
	}
	#videplayer{
		width: 100%;
		min-height: 415px;
	}
}
@media (max-width: 767px) {
 	
}
@media (max-width: 672px) {
	
}
@media (max-width: 512px) {
	#videplayer{
		width: 100%;
		min-height: 200px;
	}
	.lesson-btn{
		padding: 13px 12px;
	}
	.lesson-btn p{
		font-size: 14px;
	}
	#coursepage{
		padding: 0;
	}
	.scroll-row{
		overflow:unset;
		height: inherit;
	}
}
@media (max-width: 390px) {
	
}
@media (max-width: 320px) {

}
</style>