import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './storage/state';
import getters from './logic/getters';
import mutations from './logic/mutations';
import actions from './logic/actions';

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
