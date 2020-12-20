<template>
    <ul class="list">
        <li class="item" 
            v-for="(item,index) in Alist" 
            :key="index"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name:"CityAlphabet",
    data(){
        return{
            // Alist:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
            touchStatus: false,
            timer:null
        }
    },
    props:{
        Alist:Array
    },
    methods:{
        //点击字母使List组件显示相应的内容
        handleLetterClick(e){
            //console.log(e.target.innerText)  //能获取到点击的内容,将点击的内容传递给List组件
            this.$bus.$emit("letterChange",e.target.innerText)
        },
        //拖动字母使List组件跟着滑动
        handleTouchStart(){
            this.touchStatus = true
        },
        handleTouchMove(e){
            //进行节流处理
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    //先获取第一个字母A到自己组件(不包括上面的蓝色区域)顶部的距离,第0项才是真正的DOM元素
                    const startY = this.$refs['A'][0].offsetTop  //每次执行该方法都会重新运算，性能较低，因此需要改进
                    //获取手指移动到的位置,clientY得到的是手指距离页面最顶部的高度
                    const touchY = e.touches[0].clientY - 70  //68是city页面上面的蓝色区域的高度
                    //字母的下标值
                    const index = Math.floor((touchY - startY)/14)  //14是每个字母的高度
                    // console.log(this.Alist[index])
                    //再次触发这个事件，传值给List组件
                    if(index>=0 && index < this.Alist.length){
                        this.$bus.$emit("letterChange",this.Alist[index])
                    }    
                },12)
                
                
                
            }
        },
        handleTouchEnd(){
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~assets/styles/common.styl"
    .list
        display flex
        flex-direction column
        justify-content center
        position  absolute 
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            text-align center
            line-height .32rem
            color $bgColor
            font-size .24rem
</style>