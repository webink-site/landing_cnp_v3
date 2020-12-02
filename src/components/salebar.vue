<template>
	<div class="salebar" :class="{acSale: salebarActive}">
		<p>Полный курс со скидкой 20% до 1 декабря</p>
		
			<button class="shapka-btn" v-scroll-to="'#price'">Купить</button>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				salebarActive: false
			}
		},
		mounted(){
			let pageHeight = document.documentElement.scrollHeight;
			let headerHeight = document.querySelector('.header').clientHeight;

			window.addEventListener('scroll', ()=>{
				let winScroll = document.documentElement.scrollTop;

				if(winScroll > headerHeight && winScroll < pageHeight - 1000){
					this.salebarActive = true
				}else{
					this.salebarActive = false
				}
			})
		}
	}
</script>

<style scoped>
	.salebar{
		z-index: 100;
		position: sticky;
		width: 100%;
		left: 0;
		top: 0;
		background: linear-gradient(180deg, #2E97E6 0%, #63B2EC 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		padding:10px;
		transition: all .3s ease;
	}
	.salebar p{
		font-size: 16px;
		margin: 0;
		color: #fff;
		font-weight: 600;
		margin-right: 30px;
	}
	.salebar .shapka-btn{
		background-color: transparent;
		transition: all .3s ease;
		border: 1px #fff solid;
		color: #fff;
	}
	.salebar .shapka-btn:hover{
		background-color: #fff;
		transition: all .3s ease;
		border: 1px #fff solid;
		color: #2E97E6;
	}
	.acSale{
		bottom: 0;
	}
	@media (max-width: 512px) {
		.salebar p{
			margin-right: 0px;
			text-align: center;
			margin-bottom: 10px;
		}
		.salebar{
			flex-wrap: wrap;
		}
	}
</style>