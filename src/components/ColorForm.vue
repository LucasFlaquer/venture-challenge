<template>
  <b-container class="color">
    <h2 v-if="window<768" class="option--title">Color</h2>
    <p v-if="window<768" class="color--desc">{{desc}}</p>
    <b-row>
      <b-col cols="12" md="6">
        <figure class="color--image">
          <img :src="imageUrl" alt="">
          <figcaption>{{colors[colorSelected].label }}</figcaption>
          <figcaption>{{colors[colorSelected].price | exibePreco }}</figcaption>
        </figure>
      </b-col>
      <b-col cols="12" md="6">
        <h2 v-if="window>=768" class="option--title">Color</h2>
        <p v-if="window>=768" class="color--desc">{{desc}}</p>
        <form action="" class="color--form">
            <label v-for="(color, index) in colors" 
            :key="index"
            :for="'color'+index"
            class="color--item" 
            :class="colorSelected === index ? 'active': ''"
            @click="trocaImg(index), emit(index)">
              <img :src="dotUrl[index]" alt="">
              <input v-model="colorSelected" type="radio" name="color" :value="index" :id="'color'+index" >
            </label>
        </form>    
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {formatter} from '../js/numberFormater'
export default {
  data() {
    return {
      colorSelected: 0,
      window:0,
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
    },
    emit(color) {
			this.$emit('clicked',color);
    },
    handleResize() {
      this.window = window.innerWidth;
    }
  },
  filters: {
    exibePreco(price) {
      if(price === 0)
        return `included`
      else
        return `+${(formatter.format(price)).replace(',', '.')}`; 
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
    
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>
<style lang="scss">
  @import "~@/scss/molecules/colors"
</style>