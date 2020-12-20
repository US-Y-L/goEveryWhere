<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cityList="cityList"></city-list>
        <city-alphabet :Alist="cityI"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from "./components/Header"
    import CitySearch from "./components/Search"
    import CityList from "./components/List"
    import CityAlphabet from "./components/Alphabet"
    import axios from 'axios'
    export default {
        name:"city",
        data(){
            return {
                cityList:[],
                cityI:[]
            }
        },
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        mounted(){
            this.getList();
            
        },
        methods:{
            async getList(){
                let res = await axios.get('/api/city.json');
                if(res.status==200){
                    this.cityList = res.data.city
                    let arr = [];
                    res.data.city.forEach(item=>{
                        arr.push(item.title)
                    })
                    this.cityI = arr
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>