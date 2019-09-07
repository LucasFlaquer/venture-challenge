<template>
  <div class="home">
    <div class="home--wrap">
      <h1 class="home--title">model <span>r</span></h1>
      <figure><img src="@/assets/carro.jpg" alt=""></figure>
      <p><a href="#" class="btn btn-step">Begin</a></p>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .home {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    &--wrap {
      p {
        text-align: center;
      }
    }
    &--title {
      font-size: 3rem; 
      font-size: 9em;
      line-height: 150px;
      text-transform: uppercase;
      font-weight: 300;
      position: relative;
      margin: 0;
      span {
        color: $dark-red;
      }
      &:before {
        content:"Build your";
        position: absolute;
        top: -30px;
        text-transform: capitalize;
        color: $dark-red;
        font-size: 30px;
        letter-spacing: 5px;
        line-height: 30px;

      }
    }
    figure {
      margin-top: -80px;
    }
  }
</style>