export default {
  //开启命名空间
  namespaced: true,
  state: () => ({
    tableData : [
      {
        name: '张三',
        balance: '123',
        address: '广东省东莞市长安镇',
        state: '成功',
        time: '2022-7-26'
      },
      {
        name: '张三',
        balance: '123',
        address: '广东省东莞市长安镇',
        state: '失败',
        time: '2022-7-26'
      },
      {
        name: '张三',
        balance: '123',
        address: '广东省东莞市长安镇',
        state: '失败',
        time: '2022-7-26'
      },
      {
        name: '张三',
        balance: '123',
        address: '广东省东莞市长安镇',
        state: '成功',
        time: '2022-7-26'
      },
    ]
  }),
  mutations: {
    updataTableData(state,value){
      state.tableData=value
      // console.log(value);
    }
  },
  getters: {},
  actions: {},
  modules: {},
}