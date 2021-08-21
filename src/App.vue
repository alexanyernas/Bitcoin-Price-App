<template>
  <div class="main">
    <div class="content">
      <div class="title-box">
        <h1>Bitcoin Price</h1>
      </div>
      <div class="information-box">
        <div class="information-date">
          <h3>Current date: {{getCurrentDate()}}</h3>
          <h3>Consult time: {{getCurrentTime()}}</h3>
        </div>
        <div class="information-prices">
          <p><i class="fas fa-dollar-sign"></i>{{data.usd.rate}}</p>
          <p><i class="fas fa-pound-sign"></i>{{data.gbp.rate}}</p>
          <p><i class="fas fa-euro-sign"></i>{{data.eur.rate}}</p>
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
      darkMode: false
    }
  },
  methods: {
    ...mapActions(['setData']),
    getCurrentDate () {
      const today = new Date();
      const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
      return date;
    },
    getCurrentTime() {
      const time = new Date();
      const currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
      return currentTime;
    }
  },
  computed: {
    ...mapState(['data'])
  },
  created() {
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
}

body 
{
  font-family: 'Montserrat', sans-serif;
  background-image: url('./assets/background.jpg');
  background-position: center;
  background-size: cover;
}

.main
{
  color: var(--white);
  padding: 32px;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
}


.content
{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
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
}

.information-box .information-date
{
  margin-bottom: 20px;
  font-size: .8em;
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
}

.information-box .information-prices p i
{
  margin-right: 20px;
}

</style>