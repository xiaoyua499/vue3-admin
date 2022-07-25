import { createStore } from "vuex";
import moduleHome from "./home/home";
const store = createStore({
  modules:{
    'home':moduleHome,
  }
})

export default store