export default {
  //开启命名空间
  namespaced: true,
  state: () => ({
    user: JSON.parse(sessionStorage.getItem('user')) || { About: '不可能！我的代码怎么可能会有bug！' }
  }),
  mutations: {
    //更新用户信息
    updataUser(state, value) {
      state.user = value
      sessionStorage.setItem('user', JSON.stringify(state.user))
      // console.log(state.user);
    }
  },
  getters: {},
  actions: {},
  modules: {},
}     