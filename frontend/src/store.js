import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      email:'',
      token: 'testToken',
      trades: []
  },
  mutations:{
    setTrades: function(state, value){
      this.state.trades = value;
    },
    login(state, res){
      this.state.token = res.token;
      this.state.email = res.email;
      // this.$session.start()
      // this.$session.set('jwt', payload.token)
      // Vue.http.headers.common['x-access-token'] = payload.token
    },
    logout(){
      this.token=null
      this.email=''
      this.$session.destroy()
    }
  },
});