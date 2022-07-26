import { createStore } from "vuex";
import moduleHome from "./home/home";
import moduleTable from "./table/table"
const store = createStore({
  modules:{
    'home':moduleHome,
    'table':moduleTable
  }
})

export default store