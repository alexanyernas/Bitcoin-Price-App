<template>
  <div :class="[!darkMode && 'light', 'body']">
    <div class="main">
      <div class="mode-container">
        <button @click="changeMode">
          <i 
            v-if="darkMode" 
            class="fas fa-sun fa-2x" 
            :style="{'color': 'var(--yellow)'}"
          >
          </i>
          <i 
            v-if="!darkMode" 
            class="fas fa-moon fa-2x" 
            :style="{'color': 'var(--gray)'}"
          >
          </i>
        </button>
      </div>
      <div class="content">
        <div class="title-box">
          <h1>Bitcoin Price</h1>
        </div>
        <div class="information-box">
          <div class="information-date">
            <h3>Current date: {{getCurrentDate()}}</h3>
            <h3>Consult time: {{getCurrentTime()}}</h3>
          </div>
          <div 
            class="information-prices" 
            :style="[!darkMode && {'color': 'var(--dark)'}]"
          >
            <p><i class="fas fa-dollar-sign" ></i>{{data.usd.rate}}</p>
            <p><i class="fas fa-pound-sign"></i>{{data.gbp.rate}}</p>
            <p><i class="fas fa-euro-sign"></i>{{data.eur.rate}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      darkMode: true
    }
  },
  methods: {
    ...mapActions(['setData', 'setDataLocalStorage']),
    getCurrentDate () {
      const today = new Date();
      const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
      return date;
    },
    getCurrentTime() {
      const time = new Date();
      const currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
      return currentTime;
    },
    changeMode() {
      this.darkMode = !this.darkMode;
    },
    // stateUSD() {
    //   const usdPrice = parseFloat(this.data.usd.rate.split('.')[0].split(',').join(''));
    //   const usdPriceLocal = parseFloat(this.dataLocalStorage.usd.rate.split('.')[0].split(',').join(''))
    //   if ( usdPrice > usdPriceLocal ) {
    //     return "fas fa-angle-double-up";
    //   } else if ( usdPrice < usdPriceLocal ) {
    //     return "fas fa-angle-double-down";
    //   } else {
    //     return "fas fa-grip-lines";
    //   }
    // },
    // stateGBP() {      
    //   const gbpPrice = parseFloat(this.data.gbp.rate.split('.')[0].split(',').join(''));
    //   const gbpPriceLocal = parseFloat(this.dataLocalStorage.gbp.rate.split('.')[0].split(',').join(''))
    //   if ( gbpPrice > gbpPriceLocal ) {
    //     return "fas fa-angle-double-up";
    //   } else if ( gbpPrice < gbpPriceLocal ) {
    //     return "fas fa-angle-double-down";
    //   } else {
    //     return "fas fa-grip-lines";
    //   }
    // },
    // stateEUR() {      
    //   const eurPrice = parseFloat(this.data.eur.rate.split('.')[0].split(',').join(''));
    //   const eurPriceLocal = parseFloat(this.dataLocalStorage.eur.rate.split('.')[0].split(',').join(''))
    //   if ( eurPrice > eurPriceLocal ) {
    //     return "fas fa-angle-double-up";
    //   } else if ( eurPrice < eurPriceLocal ) {
    //     return "fas fa-angle-double-down";
    //   } else {
    //     return "fas fa-grip-lines";
    //   }
    // }
  },
  computed: {
    ...mapState(['data', 'dataLocalStorage']),
  },
  created() {
    this.setDataLocalStorage();
    this.setData();
  }
}
</script>

<style>
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root 
{
  --white: #FFF;
  --yellow: #FFFF00;
  --gray: #333;
  --dark: #222;
  --orange: #ff9d5c;
}

.body 
{
  font-family: 'Montserrat', sans-serif;
  background-position: center;
  background-size: cover;
  background-image: url('./assets/background.jpg');
}

.body.light
{
  background-image: url('./assets/background-white.jpg');
}

.main
{
  color: var(--white);
  padding: 32px;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
}

.body.light .main
{
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7));
}

.body.light .information-box 
{
  color: var(--dark);
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95));
}

.body.light .title-box
{
  color: var(--dark)
}

.mode-container
{
  display: flex;
  justify-content: flex-end;
}

.mode-container button
{
  cursor: pointer;
  padding: 12px;
  color: var(--white);
  background: transparent;
  border: none;
  outline: none;
}

.content
{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 600px) {
  .content {
    width: 100%;
  }
}

.title-box 
{
  text-align: center;
  margin-bottom: 15px;
}

.title-box h1 
{
  transition: .4s;
  letter-spacing: 1px;
  font-size: 2.5em;
}

.title-box h1:hover
{
  letter-spacing: 3px;
}

.information-box
{
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  text-align: center;
  padding: 20px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 5%;
  transition: .6s;
}

.information-box .information-date
{
  margin-bottom: 20px;
  font-size: .8em;
  transition: .3s;
}

.information-date h3 
{
  margin-bottom: 5px;
}

.information-box .information-prices p
{
  font-size: 2.3em;
  margin-bottom: 20px;
  font-weight: 900;
  transition: .5s;
}

.information-box .information-prices p i
{
  margin-right: 8px;
  color: var(--orange);
}

.information-prices .icon
{
  margin-left: 5px;
}
</style>