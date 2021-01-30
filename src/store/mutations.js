export default {
    changeHot(state , city) {
        state.city = city
        try {    //避免因为用户关闭本地存储或隐身模式 ，使用localStorage出现异常的情况
            localStorage.city = city;
        } catch (err) {
            console.log(err)
        }
        
    }
}