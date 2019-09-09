<template>
  <b-container class="engine">
    <b-row>
      <b-col cols="6">
        <figure>
          <img src="" alt="">
        </figure>
      </b-col>
      <b-col cols="6">
          <h2 class="option--title">Engine</h2>
        <form action="" class="engine--form">
            <label v-for="engine in engines" 
                   :key="engine.id"
                   :for="engine.id" class="engine--label" 
                   :class="checked === engine.id ? 'active': ''">
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
      checked: 1
    }
  },
  props: {
    engines: Array,

  }
}
</script>

<style lang="scss">
@import "~@/scss/molecules/engine"
</style>