<template>
  <div class="wheels">
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
        <span v-show="wheelSelected === index" class="wheels--price">{{wheel.price | exibePreco}}</span>
      </label>
    </form>
  </div>
</template>

<script>
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
    exibePreco(preco) {
      if(preco === 0) {
        return 'included'
      } else
        return `+$${preco}`
    }
  }
}
</script>
<style lang="scss">
  @import "~@/scss/molecules/wheels";
</style>