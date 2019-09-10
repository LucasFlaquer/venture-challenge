<template>
  <b-container class="color">
    <b-row>
      <b-col cols="12" md="6">
        <figure class="color--image">
          <img :src="imageUrl" alt="">
        </figure>
      </b-col>
      <b-col cols="12" md="6">
          <h2 class="option--title">Color</h2>
          {{desc}}
        <form action="" class="color--form">
            <label class="color--item" 
            v-for="(color, index) in colors" 
            :key="index"
            :for="'color'+index">
              <!-- {{color.label}} -->
              <img :src="require(`@/assets/blue dot.jpg`)" alt="">
              <input type="radio" name="color" :id="'color'+index">
            </label>
        </form>        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      colorSelected: 0,
      imageUrl:require(`@/assets/Red.jpg`)
    }
  },
  props: {
    colors: Array,
    desc: String
  }
}
</script>
<style lang="scss">
  @import "~@/scss/molecules/colors"
</style>