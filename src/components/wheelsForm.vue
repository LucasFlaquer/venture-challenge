<template>
  <div class="wheels">
    <h2 class="option--title">Wheels</h2>
    <form action="" class="wheels--form">
      <label v-for="(wheel,index) in wheels"
      :key="index"
      :for="'wheel'+index"
      class="wheels--item"
      @click="emit(index)"
      :class="wheelSelected === index?'active':''">
        <img :src="require(`@/assets/${wheel.label.split('” ')[1]}.jpg`)"/>
        <input type="radio" 
        :value="index" 
        name="wheel" 
        v-model="wheelSelected"
        :id="'wheel'+index">
        <p class="wheels--info" v-show="wheelSelected === index">
          {{wheel.label}}
          <span >{{wheel.price | exibePreco}}</span>
        </p>
      </label>
    </form>
  </div>
</template>

<script>
import {formatter} from '../js/numberFormater'
export default {
  props: {
    wheels: Array,
  },
  data() {
    return {
      wheelSelected: 0,
      wheelImg: []
    }
  },
  methods: {
    emit(wheel) {
      this.$emit('clicked', wheel);
    },
    created() {
      
    }
  },
  filters: {
    exibePreco(price) {
      if(price === 0) {
        return 'included'
      } else
        return `+${(formatter.format(price)).replace(',', '.')}`; 
    }
  }
}
</script>
<style lang="scss">
  @import "~@/scss/molecules/wheels";
</style>