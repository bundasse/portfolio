import { createStore } from 'vuex'

export default createStore({
  state: {
    catename:"전체",
    selectIndex:0,
  },
  getters: {
  },
  mutations: {
    portCate(state,payload){
      state.catename = payload;
    },
    SectionMove(state,payload){
      state.selectIndex = payload; 
    }
  },
  actions: {
  },
  modules: {
  }
})
