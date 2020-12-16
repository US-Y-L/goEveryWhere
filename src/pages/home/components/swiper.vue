<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide  v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="圆明园" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
    
</template>

<script>
export default {
    name: "HomeSwiper",
    data(){
        return{
            swiperOptions:{
                pagination:".swiper-pagination",
                loop:true
            },
            swiperList:[{
                id:"0001",
                imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/86ca4dc2777b997607e97eb8471dcafd.jpg_890x330_0eee7728.jpg"
            },{
                id:"0002",
                imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/8216fd250c35366befc35f6353f934b9.jpg_890x330_9062b3ba.jpg"
            },{
                id:"0003",
                imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/86ca4dc2777b997607e97eb8471dcafd.jpg_890x330_0eee7728.jpg"
            },{
                id:"0004",
                imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/8216fd250c35366befc35f6353f934b9.jpg_890x330_9062b3ba.jpg"
            },{
                id:"0005",
                imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/86ca4dc2777b997607e97eb8471dcafd.jpg_890x330_0eee7728.jpg"
            },{
                id:"0006",
                imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/8216fd250c35366befc35f6353f934b9.jpg_890x330_9062b3ba.jpg"
            },
            
            
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff !important
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 37%
        background-color #ccc
        
        .swiper-img
            width 100%
</style>