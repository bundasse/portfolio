import { createStore } from 'vuex'

export default createStore({
  state: {
    catename:"전체",
    MenuIndex: 'section-0',
    selectIndex:0
  },
  getters: {
    getIndex: state => () => state.selectIndex
  },
  mutations: {
    portCate(state,payload){
      state.catename = payload;
    },
    SectionMove(state,payload){
      state.MenuIndex = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
