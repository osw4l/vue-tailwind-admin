import Vuex from "vuex";
import auth from "./modules/auth";

// Create store
export default new Vuex.Store({
  modules: {
    auth,
  }
});
