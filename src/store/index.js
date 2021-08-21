import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    data: {
      usd: '',
      gbp: '',
      eur: ''
    }
  },
  mutations: {
    setData( state, payload ) {
      state.data = { ...payload };
    }
  },
  actions: {
    setData( {commit} ) {
      const api_url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
      axios.get(api_url)
        .then( response => {
          const { bpi } = { ...response.data };
          const { USD, GBP, EUR } = bpi;
          const dataApi = {
            usd: USD,
            gbp: GBP,
            eur: EUR
          }
          commit('setData', dataApi);
        })
        .catch(error => console.log( error.message ));
      }
    }
} )
