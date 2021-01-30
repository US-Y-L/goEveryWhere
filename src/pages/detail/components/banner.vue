<template>
    <div>
        <div class="banner">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" />
            <div class="detail-back" @click="goBack">
                <span class="iconfont">&#xe66c;</span>
            </div>
            <div class="banner-info">
                <p class="banner-title">大连圣亚海洋世界(AAAA景区)</p>
                <div class="img-num" @click="showImg">
                    <span class="iconfont img-icon">&#xe629;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary v-show="isShow" :imgList="imgs" @closeGallary="closeGallary"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary"
export default {
    name : "DetailBanner",
    data() {
        return {
            isShow : false,
            imgs:[
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/34fe2652-99bf-47e9-ac2a-8df289169c01.jpg_r_640x420x95_f2ce61d4.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/ea073df5-7713-4d6c-b04d-7e6c14a5b76a.jpg_r_640x420x95_476c147f.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/34fe2652-99bf-47e9-ac2a-8df289169c01.jpg_r_640x420x95_f2ce61d4.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/ea073df5-7713-4d6c-b04d-7e6c14a5b76a.jpg_r_640x420x95_476c147f.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/34fe2652-99bf-47e9-ac2a-8df289169c01.jpg_r_640x420x95_f2ce61d4.jpg"
                ]
        }
    },
    components:{
        CommonGallary
    },
    mounted() {
        console.log(this.$route.params.id)
    },
    methods:{
        goBack() {
            this.$router.back()
        },
        showImg() {
            this.isShow = true;
        },
        closeGallary() {   //接受的子组件传来的东西
            this.isShow = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/common.styl"
    .banner
        overflow hidden
        height 0
        padding-bottom 55%
        position relative
        .banner-img
            width 100%
        .detail-back
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
        .banner-info
            display flex
            align-items center
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0 ,0 , 0, 0), rgba(0,0,0,.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .img-num
                padding 0 .4rem
                line-height .32rem
                height .32rem
                border-radius .2rem
                background rgba(0,0,0,.4)
                font-size .24rem
                .img-icon
                    font-size .24rem
</style>