<template>
    <div class="wrapper">
        <div class="item" v-for="(item , index) of list" :key="index">
            <div class="item-title" >
                <span class="item-title-icon iconfont">&#xe66c;</span>
                {{item.title}}
            </div>
            <!-- 组件通过name属性调用自身，传进去自身需要的数据list -->
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "DetailList",
    date () {
        return {

        }
    },
    props:{
        list:{
            type: Array
        }
    }
}
</script>

<style lang="stylus" scoped>
    .item-title
        line-height .8rem
        font-size .32rem
        text-indent .2rem
        position relative
        
        &::after
            content ""
            display block
            border-bottom 1px solid #000
            transform scaleY(.5) 
            position absolute
            bottom 0
            left -.8rem
            right 0
        .item-title-icon
            margin-right .2rem
    .item-children
        padding 0 0 0 .4rem
</style>