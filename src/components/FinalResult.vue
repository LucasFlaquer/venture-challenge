<template>
  <b-container class="final">
    <b-row>
      <b-col cols="12" md="6">
        <figure><img :src="carUrl" alt=""></figure>
      </b-col>
      <b-col cols="12" md="6">
        <div class="final--list">
          <p>Starting Price {{initialPrice}}</p>
          <p>{{engine.kwh}}{{engine.type}}-{{engine.kwh}}kwh - {{engine.miles}}miles range   {{engine.price}}</p>
          <p>{{color.label}} {{color.price}}</p>
          <p>{{wheel.label}} {{wheel.price}}</p>
          <p>Final Price {{total}}</p>
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
    this.total = engine.price + color.price + wheel.price;
    // if ()
  }
}
</script>