<template>
    <div class="rec">
        <div class="rec-title">热销推荐</div>
        <ul>
            <li class="rec-item" v-for="item in recList" :key="item.id">
                
                <img class="item-img" :src="item.imgUrl" >
                
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeReccommend',
    data(){
        return{
            // recList:[{
            //     id:"0001",
            //     imgUrl:"https://imgs.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_200x200_39faf9c6.jpg",
            //     title:"颐和园",
            //     desc:"将壮观诠释到完美，将梦想展示给世界"
            // },
            // {
            //     id:"0002",
            //     imgUrl:"https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
            //     title:"故宫",
            //     desc:"将壮观诠释到完美，将梦想展示给世界"
            // },
            // {
            //     id:"0003",
            //     imgUrl:"https://imgs.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg",
            //     title:"恭王府",
            //     desc:"将壮观诠释到完美，将梦想展示给世界"
            // }
            // ]
        }
    },
    props:{
        recList:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import "~assets/styles/mixins.styl"
    .rec-title
        margin-top .2rem
        line-height .6rem
        background #eee
        text-indent .2rem
    .rec-item
        overflow hidden
        display flex
        height 1.8rem
        border-bottom 1px solid #ccc
        .item-img
            width 1.7rem
            height 1.7rem
            box-sizing border-box
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0   //单行文本溢出不显示省略号，需要在flex:1的选择器上加min-width:0
            box-sizing border-box
            .item-title
                line-height .54rem
                font-size .32rem
            .item-desc
                line-height .42rem
                font-size .28rem
                color #ccc
                elli()
            .item-btn
                margin-top .1rem
                background #ff9300
                padding .05rem
                border-radius 6px
                border none
                color #fff
                outline none
</style>