<template>
  <b-container class="engine">
    <b-row>
      <b-col cols="6">
        <figure>
          <img :src="require(`@/assets/Engine${checked}.jpg`)" alt="">
        </figure>
      </b-col>
      <b-col cols="6">
          <h2 class="option--title">Engine</h2>
        <form action="" class="engine--form">
            <label v-for="engine in engines" 
                   :key="engine.id"
                   :for="engine.id" class="engine--label" 
                   :class="checked === engine.id ? 'active': ''"
                   @click="changeImage">  
              <p>{{engine.kwh}}<span>{{engine.type}}</span></p>
              <p>{{engine.kwh}}<span>kwp</span></p>
              <p>{{engine.range}}<span>miles range</span></p>
              <input type="radio" :id="engine.id" v-model="checked" 
              :value="engine.id"  name="engine">
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
      checked: 1,
      imageUrl: require(`@/assets/Engine${checked}.jpg`)
    }
  },
  props: {
    engines: Array,
  },
  methods: {
    changeImage() {
      if(this.checked > 1) {
        this.imageUrl = require(`@/assets/Engine${2}.jpg`)
      }
      else
        this.imageUrl = require(`@/assets/Engine${checked}.jpg`)
    }
  }
}
</script>

<style lang="scss">
@import "~@/scss/molecules/engine"
</style>