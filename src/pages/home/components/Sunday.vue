<template>
    <div class="rec">
        <div class="sun-title">周末去哪</div>
        <ul>
            <li class="rec-item" v-for="item in sunList" :key="item.id">
                <div class="item-img-wrapper">
                   <img class="item-img" :src="item.imgUrl" > 
                </div>
                
                
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sunday',
    data(){
        return{
            // sunList:[{
            //     id:"0001",
            //     imgUrl:"https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
            //     title:"京城周末撒欢",
            //     desc:"在帝都过周末，不仅仅是城中游！"
            // },
            // {
            //     id:"0002",
            //     imgUrl:"https://imgs.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
            //     title:"京城有好泉",
            //     desc:"细数北京温泉，温暖你的冬天"
            // },
            // {
            //     id:"0003",
            //     imgUrl:"https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
            //     title:"京城溜娃必去",
            //     desc:"德智体美劳全面发展的亲子日，这些地方该去看看…"
            // }
            // ]
        }
    },
    props:{
        sunList:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import "~assets/styles/mixins.styl"
    .sun-title
        line-height .6rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.09%
        .item-img
            width 100%
    .item-info
        padding .1rem
        min-width 0   //单行文本溢出不显示省略号，需要在flex:1的选择器上加min-width:0
        box-sizing border-box
        padding-left .3rem
        .item-title
            line-height .54rem
            font-size .32rem
        .item-desc
            line-height .42rem
            font-size .28rem
            color #ccc
            elli()
</style>