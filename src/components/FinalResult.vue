<template>
  <b-container class="final">
    <h2 class="final--title" v-if="window<768">Your Model <span>R</span></h2>
    <figure class="final--image"><img :src="carUrl" alt=""></figure>
    <div class="final--content">
      <h2 class="final--title" v-if="window>=768">Your Model <span>R</span></h2>
      <div class="final--list">
        <div class="final--item">
          <p>Starting Price</p>
          <span>{{initialPrice | formatPrice}}</span>
        </div>
        <div class="final--item">
          <p>{{engine.kwh}}{{engine.type}} - {{engine.kwh}}kwh - {{engine.miles}}miles range</p>
          <span>{{engine.price | formatPriceAditional}}</span>
        </div>
        <div class="final--item">
          <p>{{color.label}}</p>
          <span>{{color.price | formatPriceAditional}}</span>
        </div>
        <div class="final--item">
          <p>{{wheel.label}}</p>
          <span>{{wheel.price | formatPriceAditional}}</span>
        </div>
        <div class="final--item final--item__result">
          <p>Final Price</p>
          <strong>{{total | formatPrice}}</strong>
        </div>
      </div>
      <p class="text-center"><a @click="reset" href="#" class="btn btn-restart">Rebuild</a></p>
    </div>
  </b-container>
</template>

<script>
import {formatter} from '../js/numberFormater'
export default {
  props: {
    reset: Function,
    initialPrice: Number,
    engine: Object,
    color: Object,
    wheel: Object,
    steep: Number,
  },
  data() {
    return {
      total: 0,
      window: 0,
      carUrl: require(`@/assets/finalblue.jpg`)
    }
  },
  created() {
    this.total =this.initialPrice + this.engine.price + this.color.price + this.wheel.price;
    
    switch (this.color.hexadecimal) {
      case '#AB1725':
        this.carUrl = require(`@/assets/finalred.jpg`)
        break;
      case '#0F1C2D':
        this.carUrl = require(`@/assets/finalblue.jpg`)
        break;

      case '#A8A8A8':
        this.carUrl = require(`@/assets/finalgrey.jpg`)
        break;
    }
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.window = window.innerWidth;
    }
  },
  filters: {
    formatPriceAditional(price) {
      if(price === 0)
        return `included`
      else 
        return `+${(formatter.format(price)).replace(',', '.')}`; 
    },
    formatPrice(price) {
      return (formatter.format(price)).replace(',', '.');
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
  }
}
</script>
<style lang="scss">
  @import "~@/scss/molecules/final";
</style>
