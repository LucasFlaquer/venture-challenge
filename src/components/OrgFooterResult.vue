<template>
  <footer class="footer footer__interna"> 
    <div class="preview">
      <div class="preview--item">
        <p class="preview--total">{{total+engine | formatPrice}}</p>
      </div>
      <div class="preview--item">
        <!-- <p>{{engine.type}} <span>{{engine.type}}</span></!-->
      {{engine.type}}
      </div>
    </div>
    <a @click="next" href="#" class="btn btn-step">Begin</a>
  </footer>
</template>

<script>
export default {
  props: {
    next: Function,
    total: Number,
    engine:Number,
  },
  filters: {
    formatPrice(price) {
      return (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
  }
}
</script>


<style lang="scss">
  @import "~@/scss/organisms/org-footer";
</style>