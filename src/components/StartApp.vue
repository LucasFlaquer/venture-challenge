<template>
  <div class="home">
    <div class="home--wrap">
      <h1 class="home--title">model <span>r</span></h1>
      <figure><img src="@/assets/carro.jpg" alt=""></figure>
      <p><a @click="next" href="#" class="btn btn-step">Begin</a></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    next: Function
  }
}
</script>
<style lang="scss">
  @import "~@/scss/molecules/home";
</style>