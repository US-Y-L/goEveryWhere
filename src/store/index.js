import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

//数据持久化，避免刷新时初始化数据
import createPersistedState from "vuex-persistedstate"

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

let defaultCity = "北京"
//使用了localStorage 记得使用try catch 加入用户关闭本地存储或隐身模式，此时使用localStorage会抛出异常
try{
    if(localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (err) {
    console.log(err)
}

export default new Vuex.Store({
    state:{
        city: defaultCity
    },
    mutations,
    actions,
    getters,
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})