<template>
    <div id="cSearch">
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" v-show="keyword">
            <ul>
                <li class="search-item" v-for="(item,index) of cityList" :key="index">
                    {{item}}
                </li>
                <li v-show="!cityList.length" class="search-item">
                    没有找到匹配数据
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name:"CitySearch",
    props:{
        city:{
            type:Array,
            default:[],
            timer:null
        }
    },
    data(){
        return {
            keyword:"",
            cityList:[],
        }
    },
    watch:{
        keyword(newV){
            if(this.timer){
                clearTimeout(this.timer);
            }
            if(!newV){
                this.cityList = []
                return
            }
            this.timer  = setTimeout(()=>{
                this.city.forEach(item => {
                    if(item.title.toLowerCase() === newV.toLowerCase()){
                        this.cityList = item.lists
                    }
                })
            },100)
        }
    },
    mounted(){
        // console.log(this.city)
        console.log(this.list);
    }
}
</script>

<style lang="stylus" scoped>
    @import "~assets/styles/common.styl"
    #cSearch
        .search
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
        .search-content
            z-index 2
            overflow hidden
            position absolute
            left 0
            top 1.58rem
            right 0
            buttom 0
            background #eee
            .search-item
                line-height .52rem
                border-bottom 1px solid #ccc
                background #fff
                padding-left .1rem
            
</style>