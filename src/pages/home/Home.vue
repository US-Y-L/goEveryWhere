<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-reccommend></home-reccommend>
        <home-sunday></home-sunday>
    </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from "./components/swiper";
import HomeIcons from "./components/icons";
import HomeReccommend from './components/Reccommend'
import HomeSunday from "./components/Sunday"
import axios from 'axios'
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
            HomeReccommend,
            HomeSunday
        },
        //整个工程下，只有static中的文件能被访问到,将本地开发模拟的数据放入到static文件夹中
        methods:{  //在首页去统一获取每个组件需要的数据
            async getHomeInfo(){
                let res = await axios.get('/api/index.json');
                console.log(res)
            }
        },
        mounted(){
            this.getHomeInfo()
        }
    }
</script>

<style scoped>

</style>