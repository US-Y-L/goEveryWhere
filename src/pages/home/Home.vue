<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-reccommend></home-reccommend>
    </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from "./components/swiper";
import HomeIcons from "./components/icons";
import HomeReccommend from './components/Reccommend'
    export default {
        data(){
            return {
                title:"Home"
            }
        },
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeReccommend
        }
    }
</script>

<style scoped>

</style>