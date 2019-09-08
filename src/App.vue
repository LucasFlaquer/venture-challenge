<template>
  <div id="app">
    <OrgHeader/>
    <div class="model--wrap">
      <StartApp v-if="steeps===0" :next="next"/>
    </div>
    <OrgFooter v-if="steeps===0"/>
  </div>
</template>

<script>
import OrgHeader from './components/OrgHeader'
import OrgFooter from './components/OrgFooter-home'
import StartApp from './components/StartApp'
import { Request } from './request'

export default {
  name: 'app',
  components: {
    OrgHeader,
    OrgFooter,
    StartApp
  },
  data() {
    return {
      steeps: 0,
      total: 0,
      colors: {},
      wheels:{},
      engine:{},
      price: 0
    }
  },
  methods: {
    next() {
      this.steeps ++;
    }
  },
  mounted: function() {
    Request()
    .then((response)=> {
      this.colors - response.data.color;
      this.wheels = response.data.wheels;
      this.engine = response.data.engine;
      this.price = response.data.price;
      
    })
    .catch((error)=> {
      console.log(error);
    });
  }
}
</script>
