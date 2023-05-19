import { createStore } from 'vuex'

export default createStore({
  state: {
    catename:"전체"
  },
  getters: {
  },
  mutations: {
    portCate(state,payload){
      state.catename = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
