<template>
    <div class="wrapper">
        <div  
            class="header-abs" 
            @click="goBack"
            v-show="showABS"
            >
            <span class="iconfont">&#xe66c;</span>
        </div>
        <div class="header-fixed" v-show="!showABS" :style="opacityStyle"> 
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe66c;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailHeader",
    data () {
        return {
            showABS : true,
            opacityStyle: {
                opacity : 0
            }
        }
    },
    methods:{
        goBack() {
            this.$router.back();
        },
        handleScroll() {
            const top = document.documentElement.scrollTop   //监听window滚动事件
            if( top > 60  ) {   //渐隐渐现效果
                let opacity = top / 160;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = {
                    opacity
                }
                this.showABS = false
            } else{
                this.showABS = true
            }
        }

    },
    mounted() {   //全局对象上绑定的事件可能会影响别的组件
        window.addEventListener('scroll' , this.handleScroll , false)
    },
    destoryed() {   //在组件被销毁的生命周期钩子中解绑在全局对象上的方法
        window.removeEventListener('scroll' , this.handleScroll , false)
    }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/common.styl'
    .header-abs
        position absolute
        left .3rem
        top .3rem
        width .6rem
        height .6rem
        border-radius 50%
        background rgba(0,0,0,.4)
        text-align center
        line-height .6rem
        color #fff
    .header-fixed
        z-index 12   //设置z-index盖住上滑的内容，但是z-index值不能高于图片轮播墙
        position fixed
        left 0
        top 0
        right 0
        line-height $headerHeight
        height $headerHeight
        background-color $bgColor
        color #fff
        font-size .32rem
        text-align center
        .header-fixed-back
            position absolute
            left .2rem
            top 0
            color #fff
</style>