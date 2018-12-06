import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      user:{},
      isLogged: false, // 로그인 중인 여부 판단
      trades: []
  },
  mutations:{
    setTrades: function(state, value){
      this.state.trades = value;
    },
    setUser(state, user){
      this.state.user = user
      console.log('VUEX setUser :',this.state.user);
    },
    setIsLogged(state, value){
      this.state.isLogged = value;
    },
    removeUser(){
      this.state.user = {}
    }
  },
});