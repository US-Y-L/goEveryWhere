<template>
    <div id="wrapper">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from "./components/banner"
import DetailHeader from "./components/Header"
import DetailList from "./components/List"
export default {
    name : "Detail",
    data(){
        return{
            list: [
                {
                    title : "成人票",
                    children: [
                        {
                            title: "成人三馆连票" , 
                            children: [
                                {title : "成人三馆联票---呼和浩特店"}
                            ]
                        },
                        {title: "成人五馆连票"},
                        {title: "成人七馆连票"},
                    ]
                },
                {title : "学生票"},
                {title : "儿童票"},
                {title : "特惠票"}
            ]
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    mounted() {
        console.log(this.$route.params.id)
    }
}
</script>

<style lang="stylus" scoped>
    .content
        width 100%
        height 20rem
</style>