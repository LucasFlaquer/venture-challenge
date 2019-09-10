<template>
  <footer class="footer footer__interna"> 
    <div class="preview">
      <div class="preview--item">
        <p class="preview--total">
          <span>{{total+engine.price+color.price+wheel.price | formatPrice}}</span>
        </p>
      </div>
      <div class="preview--item">
        <p>Model R</p>
      </div>
      <div class="preview--item">
        <p>{{engine.kwh}} <span>{{engine.type}}</span></p>
      </div>
    </div>
    <a @click="next" href="#" class="btn btn-step">Next</a>
  </footer>
</template>

<script>
export default {
  props: {
    next: Function,
    total: Number,
    engine: Object,
    color: Object,
    wheel: Object

  },
  filters: {
    formatPrice(price) {
      // let price2 = price.toString();
      // return `$${price2[0]}${price2[1]}.${price2[ ...]}`
      return `$${(price).toFixed(0).replace(/\d(?=(\d{2})+\.)/g, '$&,')}`;
    }
  },
}
</script>


<style lang="scss">
  @import "~@/scss/organisms/org-footer";
</style>