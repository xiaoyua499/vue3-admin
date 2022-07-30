import { createStore } from "vuex";
import moduleHome from "./home/home";
import moduleTable from "./table/table"
import moduleLogin from "./login/login"
const store = createStore({
  modules:{
    'home':moduleHome,
    'table':moduleTable,
    'login':moduleLogin
  }
})

export default store