import Vue from "vue";
import Vuex from "vuex";

import PrincipalStore from "./modules/principal";
import WebsocketStore from "./modules/websocket";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    principalStore: PrincipalStore,
    websocket: WebsocketStore
  }
});
