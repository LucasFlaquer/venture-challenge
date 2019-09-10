<template>
  <b-container class="color">
    <b-row>
      <b-col cols="12" md="6">
        <figure class="color--image">
          <img :src="imageUrl" alt="">
          <figcaption>{{colors[colorSelected].label }}</figcaption>
          <figcaption>{{colors[colorSelected].price | exibePreco }}</figcaption>
        </figure>
      </b-col>
      <b-col cols="12" md="6">
          <h2 class="option--title">Color</h2>
          {{desc}}
        <form action="" class="color--form">
            <label v-for="(color, index) in colors" 
            :key="index"
            :for="'color'+index"
            class="color--item" 
            :class="colorSelected === index ? 'active': ''"
            @click="trocaImg(index)">
              <img :src="dotUrl[index]" alt="">
              <input v-model="colorSelected" type="radio" name="color" :value="index" :id="'color'+index" >
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
      imageUrl:require(`@/assets/Red.jpg`),
      dotUrl: [
        require(`@/assets/red-dot.jpg`),
        require(`@/assets/blue-dot.jpg`),
        require(`@/assets/grey-dot.jpg`)
      ]
    }
  },
  props: {
    colors: Array,
    desc: String
  },
  methods: {
    trocaImg(index) {
      if(index === 0) {
        this.imageUrl = require(`@/assets/Red.jpg`);
      } else if(index===1) {
        this.imageUrl = require(`@/assets/Blue.jpg`);
      } else {
        this.imageUrl = require(`@/assets/Grey.jpg`);
      }
    }
  },
  filters: {
    exibePreco(price) {
      if(price === 0)
        return `included`
      else
        return price
    }
  }
}
</script>
<style lang="scss">
  @import "~@/scss/molecules/colors"
</style>