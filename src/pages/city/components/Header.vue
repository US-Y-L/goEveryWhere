<template>
    <div class="header">
        <router-link to="/">
            <span class="iconfont back" >&#xe66c;</span>
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~assets/styles/common.styl'
    .header
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        position relative
        .back
            position absolute 
            left .2rem
            top 0
            color #fff
            font-size .32rem
</style>