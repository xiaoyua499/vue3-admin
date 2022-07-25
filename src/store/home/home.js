export default {
  //开启命名空间
  namespaced: true,
  state: () => ({
    //侧边栏收缩状态
    stretch: false
  }),
  mutations: {
    //更新侧边栏收缩状态
    updataStretch(state) {
      state.stretch = !state.stretch
      // console.log(state.stretch);
    }
  },
  getters: {},
  actions: {},
  modules: {},
}