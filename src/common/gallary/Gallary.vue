<template>
    <div class="container" @click.self="close">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item , index) of this.imgList" :key="index">
                    <img class="swiper-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommonGallary",
    props:{
        imgList:{
            type : Array,
            default () {
                    return [
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/34fe2652-99bf-47e9-ac2a-8df289169c01.jpg_r_640x420x95_f2ce61d4.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/ea073df5-7713-4d6c-b04d-7e6c14a5b76a.jpg_r_640x420x95_476c147f.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/34fe2652-99bf-47e9-ac2a-8df289169c01.jpg_r_640x420x95_f2ce61d4.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/ea073df5-7713-4d6c-b04d-7e6c14a5b76a.jpg_r_640x420x95_476c147f.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/34fe2652-99bf-47e9-ac2a-8df289169c01.jpg_r_640x420x95_f2ce61d4.jpg"
                ]
            }
        }
    },
    data () {
        return {
            swiperOptions:{
                pagination:".swiper-pagination",
                paginationType: 'fraction',   //显示形式为分页
                observeParents: true,  //监听到附加元素发生DOM元素改变时，就重新计算自身宽度，否则重新显示时，滑动会出错
                observer: true   
            }
        }
    },
    methods: {
        close () {   //传递给调用它的父组件
            this.$emit("closeGallary")
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left 0
        top 0
        right 0
        bottom 0
        background #000
        .wrapper >>> .swiper-container    //解决滑动没有图片的地方划不动的问题
            height 0
            padding-bottom 66.6%
            overflow inherit
        .wrapper
            // overflow hidden
            width 100%
            height 0
            padding-bottom 66.6%
            background #ccc
            .swiper-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1.5rem
</style>