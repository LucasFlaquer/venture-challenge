<template>
  <b-container class="engine">
    <b-row>
      <b-col cols="12" md="6">
        <figure class="engine--image">
          <img :src="imageUrl" alt="">
        </figure>
      </b-col>
      <b-col cols="12" md="6">
          <h2 class="option--title">Engine</h2>
        <form action="" class="engine--form">
            <label v-for="engine in engines" 
                   :key="engine.id"
                   :for="'engine'+engine.id"
                   class="engine--label" 
                   :class="engineSelected === engine.id ? 'active': ''"
                   @click="changeImage(engine.id)">  
              <p>{{engine.kwh}}<span>{{engine.type}}</span></p>
              <p>{{engine.kwh}}<span>kwp</span></p>
              <p>{{engine.range}}<span>miles range</span></p>
              <div class="custom-check">
                <input type="radio" 
              v-model="engineSelected"
              :value="engine.id"
              :id="'engine'+engine.id" 
              name="engine">
              <span class="checkmark"></span>
              </div>
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
      engineSelected: 1,
      imageUrl: require(`@/assets/Engine1.jpg`)
    }
  },
  props: {
    engines: Array,
  },
  methods: {
    changeImage(id) {
      if(id === 1) {
        this.imageUrl = require(`@/assets/Engine1.jpg`)
      }
      else
        this.imageUrl = require(`@/assets/Engine2.jpg`)
    }
  }
}
</script>

<style lang="scss">
@import "~@/scss/molecules/engine"
</style>