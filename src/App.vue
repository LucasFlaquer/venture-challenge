<template>
  <div id="app">
    <OrgHeader/>
    <div class="model--wrap">
      <StartApp v-if="steeps===0" :next="next"/>
      <EngineForm v-else :engines="engine"/>
    </div>
    <OrgFooter/>
  </div>
</template>

<script>
import OrgHeader from './components/OrgHeader'
import OrgFooter from './components/OrgFooter-home'
import StartApp from './components/StartApp'
import EngineForm from './components/EngineForm'
import { Request } from './request'

export default {
  name: 'app',
  components: {
    OrgHeader,
    OrgFooter,
    StartApp,
    EngineForm,
  },
  data() {
    return {
      steeps: 1,
      total: 0,
      colors: {},
      wheels:{},
      engine:[],
      engineIndex: 0,
      colorIndex: 0,
      whellIndex: 0,
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
      this.engine = response.data.engine.items;
      this.price = response.data.price;
      console.log(this.engine)
      
    })
    .catch((error)=> {
      console.log(error);
    });
  }
}
</script>
