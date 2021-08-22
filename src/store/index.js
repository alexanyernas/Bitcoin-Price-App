import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    data: {
      usd: '',
      gbp: '',
      eur: ''
    },
    dataLocalStorage: {
      usd: '',
      gbp: '',
      eur: ''
    }
  },
  mutations: {
    setData( state, payload ) {
      state.data = { ...payload };
      localStorage.setItem('bitcoinData', JSON.stringify(state.data));
    },
    setDataLocalStorage( state, payload ) {
      state.dataLocalStorage = { ...payload };
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
      },
      setDataLocalStorage( {commit} ) {
        if (localStorage.getItem('bitcoinData')) {
          const dataLocalStorage = JSON.parse(localStorage.getItem('bitcoinData'));
          commit('setDataLocalStorage', dataLocalStorage);
          return;
        }
        localStorage.setItem('bitcoinData', JSON.stringify({}));
      }
    }
} )
