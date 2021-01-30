<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-reccommend :recList="recList"></home-reccommend>
        <home-sunday :sunList="sunList"></home-sunday>
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
        name:"Home",
        data(){
            return {  //统一向子组件传递的数据
                swiperList:[],
                iconList:[],
                recList:[],
                sunList:[]
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
                if(res.data.ret==true && res.data.data){
                    // console.log(res.data.data)
                    const data = res.data.data
                    // this.city = data.city
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recList = data.recList
                    this.sunList = data.sunList
                }
            }
        },
        mounted(){
            this.getHomeInfo()
        }
    }
</script>

<style scoped>

</style>