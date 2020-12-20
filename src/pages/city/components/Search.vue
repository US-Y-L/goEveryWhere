<template>
    <div id="cSearch">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name:"CitySearch",
    data(){
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~assets/styles/common.styl"
    #cSearch
        height .72rem
        box-sizing border-box
        padding .05rem
        background $bgColor
        .search-input
            height .62rem
            width 100%
            line-height .62rem
            text-align center
            border-radius 8px
            outline none
            color #0000f8
            box-sizing border-box
            padding .1rem
</style>