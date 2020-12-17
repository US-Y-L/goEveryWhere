<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
            <swiper-slide  v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="圆明园" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
            <div class="swiper-button-next" slot="button-next" @click="next"></div>
        </swiper>
    </div>
    
</template>

<script>
export default {
    name: "HomeSwiper",
    props:{
        swiperList:Array
    },
    data(){
        return{
            swiperOptions:{
                pagination:".swiper-pagination",
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    computed:{
        showSwiper(){
            return this.swiperList.length
        }
    },
    methods:{
        //解决swiper组件左右滑动按钮失效问题
        prev(){
            this.$refs.mySwiper.swiper.slidePrev();
        },
        next(){
            this.$refs.mySwiper.swiper.slideNext();
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff !important
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 37%
        background-color #ccc
        
        .swiper-img
            width 100%
</style>