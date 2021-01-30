<template>
    <div id="wrapper">
        <detail-banner></detail-banner>
    </div>
</template>

<script>
import DetailBanner from "./components/banner"
export default {
    name : "Detail",
    data(){
        return{

        }
    },
    components:{
        DetailBanner
    },
    mounted() {
        console.log(this.$route.params.id)
    }
}
</script>

<style lang="stylus" scoped>

</style>