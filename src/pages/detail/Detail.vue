<template>
    <div id="wrapper">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from "./components/banner"
import DetailHeader from "./components/Header"
export default {
    name : "Detail",
    data(){
        return{

        }
    },
    components:{
        DetailBanner,
        DetailHeader
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