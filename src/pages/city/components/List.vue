<template>
    <div id="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbot">当前城市</div>
                <div class="btn-list">
                    <div class="btn-wrapper">
                        <div class="btn">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbot">热门城市</div>
                <div class="btn-list">
                    <div class="btn-wrapper">
                        <div class="btn">呼和浩特</div>
                    </div>
                    <div class="btn-wrapper">
                        <div class="btn">北京</div>
                    </div>
                    <div class="btn-wrapper">
                        <div class="btn">北京</div>
                    </div>
                    <div class="btn-wrapper">
                        <div class="btn">北京</div>
                    </div>
                    <div class="btn-wrapper">
                        <div class="btn">北京</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="item in cityList" :key="item.title" :ref="item.title">
                <div class="title border-topbot">{{item.title}}</div>
                <div class="item-list" 
                     v-for="(item,index) in item.lists" 
                     :key="index"
                     
                >
                    <div class="item">{{item}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bScroll from "better-scroll"
export default {
    name:"CityList",
    props:{
        cityList:Array
    },
    data(){
        return{
            letter:""
        }
    },
    updated(){
        this.scroll = new bScroll(this.$refs.wrapper)
        // console.log(this.cityList)
    },
    watch:{
        cityList:{
            handler(newV,oldV){
                console.log(newV)
            },
            deep:true,
            immediate:true   //初始化就进行监听
        },
        letter:{
            handler(newV){
                if(this.letter){
                    const element = this.$refs[newV]  //得到的是数组
                    // console.log(element[0])
                    //而better-scroll组件需要的是一个DOM元素或DOM选择器，可以跳转到对应的DOM元素
                    this.scroll.scrollToElement(element[0])  //第0项才是真正的DOM元素
                }
            }
            // immediate:true
        }
    },
    mounted(){
        console.log(this.cityList,"数据更新了");
        this.$bus.$on("letterChange",(letter)=>{
            // console.log(letter)
            this.letter = letter
        })
    },
    methods:{
        
    }
}
</script>

<style lang="stylus" scoped>
    @import "~assets/styles/common.styl"
    @import "~assets/styles/mixins.styl"
    .border-topbot
        &:before
            border-color #777
        &:after
            border-color #777
    #list
        position absolute
        top 1.58rem
        left 0
        bottom 0 
        right 0
        overflow hidden
        .title
            line-height .44rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .btn-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .btn-wrapper
                float left
                width 33.33%
                .btn
                    margin .1rem
                    text-align center 
                    padding .1rem 0
                    border .02rem solid #cccccc
                    border-radius 6px
        .item-list
            line-height .76rem
            color #666666
            
            .item
                padding-left .2rem
                border-bottom 1px solid #ccc
</style>