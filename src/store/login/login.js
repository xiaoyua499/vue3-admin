export default {
  //开启命名空间
  namespaced: true,
  state: () => ({
    permissions: false
  }),
  mutations: {
    updataPermissions(state) {
      state.permissions = !state.permissions
      // console.log(111);
    }
  },
  getters: {},
  actions: {},
  modules: {},
}     