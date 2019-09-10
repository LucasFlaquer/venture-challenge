<template>
  <b-container class="engine">
    <b-row>
      <b-col cols="12" md="6">
        <picture class="engine--image">
          <source :srcset="imageUrlMobile" media="(max-width: 767px)">
          <img :src="imageUrl" alt="">
        </picture>
      </b-col>
      <b-col cols="12" md="6">
          <h2 class="option--title">Engine</h2>
        <form action="" class="engine--form">
            <label v-for="(engine,index) in engines" 
                   :key="engine.id"
                   :for="'engine'+engine.id"
                   class="engine--item" 
                   :class="engineSelected === engine.id ? 'active': ''"
                   @click="changeImage(engine.id); emit(index)">  
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
              <span v-if="engine.price>0"
                    v-show="engineSelected === engine.id"
                    class="engine--price">+${{engine.price | priceFormat}}</span>
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
      imageUrl: require(`@/assets/Engine1.jpg`),
      imageUrlMobile: require(`@/assets/Engine1_xs.jpg`)
    }
  },
  props: {
    engines: Array,
  },
  methods: {
    changeImage(id) {
      if(id === 1) {
        this.imageUrl = require(`@/assets/Engine1.jpg`);
        this.imageUrlMobile = require(`@/assets/Engine1_xs.jpg`)
      }
      else{
        this.imageUrl = require(`@/assets/Engine2.jpg`);
        this.imageUrlMobile = require(`@/assets/Engine2_xs.jpg`);
      }
    },
		emit(engine) {
			this.$emit('clicked',engine);
		}
  },
  filters: {
    priceFormat(price) {
      return (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
  }
}
</script>

<style lang="scss">
  @import "~@/scss/molecules/engine";
</style>