import { createStore } from 'vuex'

export default createStore({
  state: {
    catename:"전체",
    selectIndex:0,
    watchIndex:0,
    darkOn:false
  },
  getters: {
  },
  mutations: {
    portCate(state,payload){
      state.catename = payload;
    },
    SectionMove(state,payload){
      state.selectIndex = payload; 
    },
    dark(state){
    if(state.darkOn === false){
      state.darkOn = true;
      document.documentElement.setAttribute("data-theme", "dark")
    }else{
      state.darkOn = false;
      document.documentElement.setAttribute("data-theme", "light");
    }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
