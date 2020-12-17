<template>
    <div class="icons">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon"  v-for="(item,index) of page" :key="index">
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-text">{{item.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    data(){
        return{
            swiperOptions:{
                pagination:".swiper-pagination",
                autoplay: false
            },
            // iconList:[
            // // {
            // //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png",
            // //     title:"景点门票"
            // // },
            // // {
            // //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/7c1e26fd490c3b65c2858fe5da96141c.png",
            // //     title:"滑雪季"
            // // },
            // // {
            // //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/a9d33792bd961b1692638d86cf3e6b83.png",
            // //     title:"万龙滑雪场"
            // // },
            // // {
            // //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/5ffcd4a916f764f678263b27c1e2e00c.png",
            // //     title:"天坛公园"
            // // },
            // // {
            // //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png",
            // //     title:"动植物园"
            // // },
            // // {
            // //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png",
            // //     title:"一日游"
            // // },
            // // {
            // //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png",
            // //     title:"自然风光"
            // // },
            // // {
            // //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/5ffcd4a916f764f678263b27c1e2e00c.png",
            // //     title:"泡温泉"
            // // },
            // // {
            // //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/5ffcd4a916f764f678263b27c1e2e00c.png",
            // //     title:"泡温泉"
            // // }
            // ],
            
        }
    },
    props:{
        iconList:Array
    },
    computed:{
        pages () {
            const pages = []
            this.iconList.forEach((item,index)=>{
                const page = Math.floor(index / 8)  //判断当前下标的数据应该展示在哪一页
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    },
}
</script>

<style lang="stylus" scoped>
    @import "~assets/styles/common.styl"
    @import "~assets/styles/mixins.styl"
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icons >>> .swiper-pagination-bullet-active
        background #bfa !important
    .icons
        margin-top .2rem
        .icon
            position relative
            overflow hidden
            float left 
            width 25%
            // height 0
            padding-bottom 25%
            background-color #fff
            .icon-img 
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding: .1rem
                .icon-imgcontent
                    display block
                    height 100%
                    margin 0 auto
            .icon-text
                position absolute 
                left 0
                bottom 0
                height .44rem
                line-height .44rem
                width 100%
                text-align center
                color $textColor
                elli()
</style>