<template>
	<section id="nikita">
		<div class="nikita-img"></div>
		<div class="nikita-about">
			<h1 class="wow fadeInUp">Никита Пугачев</h1>
			<br>
			<p class="white-bold wow fadeInUp">
Режиссер, оператор.
<br><br>
За 12 лет прошел успешный путь от репортажной съемки с камерой в руках до масштабных коммерческих проектов и рекламных клипов. 
<br><br>
Сейчас основное направление в съемках table&top(фуд-видео).
<br><br>
Работал с Ginza Project, Food Retail Group , L’One, Greenpeace, Газпром НЕФТЬ, Befree, Чистая линия, СВЯЗЬ Банк, MOBY&SPL, Суши WOK, Matti, Four Seasons.
<br><br>
Проводить мастер-классы и онлайн обучение начал в 2016 году. За это время посетил более 10 городов России, проводил семинары в Казахстане и Белоруссии .</p>
		</div>
	</section>
</template>


<style>
	#nikita{
		height: 800px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 300px;
		flex-wrap: nowrap;
	}
	.nikita-about{
		background-color: #262626;
		padding: 50px 30px;
		width: 50%;
		height: 100%;
	}
	.nikita-img{
		background-image: url('https://nikitapugachev.ru/wp-content/uploads/2020/11/img_4337-1.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 100%;
		width: 50%;
	}
	@media (max-width: 1024px) {
		#nikita{
			flex-wrap: wrap;
			height: inherit;
		}
		.nikita-about{
			width: 100%;
		}
		.nikita-img{
			width: 100%;
			height: 900px;
		}
		.learn__item{
			min-height:280px;
		}
	}
	@media (max-width: 991px) {
		#nikita{
			flex-wrap: wrap;
			height: inherit;
		}
		.nikita-about{
			width: 100%;
		}
		.nikita-img{
			width: 100%;
			height: 700px;
		}
	}
	@media (max-width: 512px) {
		#nikita{
			flex-wrap: wrap;
			height: inherit;
		}
		.nikita-about{
			width: 100%;
		}
		.nikita-img{
			width: 100%;
			height: 400px;
		}
	}
</style>