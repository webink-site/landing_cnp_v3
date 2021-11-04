<template>
    <section id="semki" class="hidden-lg hidden-md">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Съемки</h2>
                </div>
            </div>
            <div class="row scroll-row">
                    <div v-for="item in images" >
                        <div class="image-box" :style="{'background-image': 'url(' + item.img + ')'}" ></div>
                    </div>
                 
            </div>
        </div>
    </section>
</template>



<script>

export default {
    data(){
        return{

            images: [
                
                {
                    img: 'https://nikitapugachev.ru/wp-content/uploads/2021/11/img_3863.gif'
                },
                {
                    img: 'https://nikitapugachev.ru/wp-content/uploads/2021/11/img_3863_5.gif'
                },
                {
                    img: 'https://nikitapugachev.ru/wp-content/uploads/2021/11/img_3863_4.gif'
                },
                {
                    img: 'https://nikitapugachev.ru/wp-content/uploads/2021/11/img_3863_3.gif'
                },
                {
                    img: 'https://nikitapugachev.ru/wp-content/uploads/2021/11/img_3863_2.gif'
                },
                {
                    img: 'https://nikitapugachev.ru/wp-content/uploads/2021/11/img_3863_1.gif'
                },
            ]
        }
    }
}
</script>
