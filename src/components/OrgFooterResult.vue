<template>
  <footer class="footer footer__interna"> 
    <div class="preview">
      <div class="preview--item">
        <p class="preview--total">
          <span>{{total+engine.price+color.price+wheel.price | formatPrice}}</span>
        </p>
      </div>
      <div class="preview--item" v-if="window>768">
        <p>Model R</p>
      </div>
      <div class="preview--item">
        <p>{{engine.kwh}} <span>{{engine.type}}</span></p>
      </div>
      <div class="preview--item" v-if="steep > 1 && window>768">
        <span class="color" v-bind:style="{backgroundColor: color.hexadecimal}"></span>
      </div>
      <div class="preview--item" v-if="steep > 2 && window>768">
        <img class="wheel" :src="require(`@/assets/${wheel.label.split('” ')[1]}.jpg`)"/>
      </div>
    </div>
    <a @click="next" href="#" class="btn btn-step">Next</a>
  </footer>
</template>

<script>
import { formatter } from '../js/numberFormater';
export default {
  props: {
    next: Function,
    total: Number,
    engine: Object,
    color: Object,
    wheel: Object,
    steep: Number,
    

  },
  data() {
    return {
      window:0
    }
  },
  filters: {
    formatPrice(price) {
      return (formatter.format(price)).replace(',', '.'); 
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
    
  },
  methods: {
    handleResize() {
      this.window = window.innerWidth;
    }
  },
   destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>


<style lang="scss">
  @import "~@/scss/organisms/org-footer";
</style>