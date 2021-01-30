<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back">&#xe66c;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe684;</span>
            输入城市/景点/游玩主题 
        </div>
        <div class="header-right">
            <router-link to="/city">{{dubbleCity}}</router-link>
            <span class="iconfont">&#xe686;</span>
        </div>
    </div>
</template>

<script>
import { mapState,mapGetters } from "vuex"
export default {
    name: 'HomeHeader',
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['city']),
        ...mapGetters(['dubbleCity'])
    }
}
</script>

<style lang="stylus" scoped>
    @import '~assets/styles/common.styl'
    .header
        line-height $headerHeight
        // width 7.5rem
        display flex
        background-color $bgColor
        color #fff
        .header-left 
            width .64rem
            float left 
            text-align center
            span 
                font-size .4rem
        .header-input
            flex 1
            background #ffffff
            border-radius 5px
            height .64rem
            line-height .64rem
            margin-top .12rem
            margin-left .10rem
            color #ccc
            padding-left .2rem
        .header-right
            min-width 1.04rem
            padding 0 .1rem
            float right
            text-align center
            a
                color #fff
</style>