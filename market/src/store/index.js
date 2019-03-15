import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 初始化时使用sessionStore.getItem('token'),这样子刷新网页就无需重新登录
// 全局访问的state对象
const state = {
  userId: window.sessionStorage.getItem('userId'),
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token')
}
// 实时监听state值的变化
const getters = {
  getUserId (state) {
    return state.userId
  },
  getUser (state) {
    return state.user
  },
  getToken (state) {
    return state.token
  }
}
// 自定义改变state初始值的方法（同步事务）
const mutations = {
  newUser (state, user) {
    state.user = user
  },
  // 将token保存到sessionStorage里，token表示登录状态
  set_token: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data)
  },
  // 保存用户名
  set_user: (state, data) => {
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  // 退出登录
  login_out: (state) => {
    state.token = null
    state.user = null
    state.userId = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
    window.sessionStorage.removeItem('userId')
  }
}
// 自定义触发mutations里函数的方法，context和store实例具有相同的方法和属性（异步操作）
const actions = {
  anewUser (context) {
    context.commit('newUser', user)
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
