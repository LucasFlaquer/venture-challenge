<template>
  <b-container class="final">
    <b-row>
      <b-col cols="12" md="8">
        <figure><img :src="carUrl" alt=""></figure>
      </b-col>
      <b-col cols="12" md="4">
        <h2 class="final--title">Your Model <span>R</span></h2>
        <div class="final--list">
          <div class="final--item">
            <p>Starting Price</p>
            <span>{{initialPrice}}</span>
          </div>
          <div class="final--item">
            <p>{{engine.kwh}}{{engine.type}}-{{engine.kwh}}kwh - {{engine.miles}}miles range</p>
            <span>{{engine.price}}</span>
          </div>
          <div class="final--item">
            <p>{{color.label}}</p>
            <span>{{color.price}}</span>
          </div>
          <div class="final--item">
            <p>{{wheel.label}} <span>{{wheel.price}}</span></p>
          </div>
          <div class="final--item">
            <p>Final Price</p>
            <strong>{{total}}</strong>
          </div>
        </div>
        <p><a @click="reset" href="#" class="btn btn-restart">Rebuild</a></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
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
      carUrl: ''
    }
  },
  created() {
    this.total =this.initialPrice + this.engine.price + this.color.price + this.wheel.price;
    // if ()
  }
}
</script>
<style lang="scss">
  @import "~@/scss/molecules/final"
</style>
