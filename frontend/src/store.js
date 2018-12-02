import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      token: 'testToken',
      trades: []
  },
  mutations:{
    setTrades: function(state, value){
      this.state.trades = value;
    }
  }
});