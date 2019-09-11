<template>
  <div id="app">
    <OrgHeader/>
    <div class="model--wrap">
      <StartApp v-if="steeps===0" :next="next"/>
      <EngineForm @clicked="engineChild" v-if="steeps===1" :next="next" :engines="engines"/>
      <ColorForm v-if="steeps === 2" :next="next" @clicked="colorChild"
      :colors="colors.items"
      :desc="colors.description"/>
      <wheelsForm v-if="steeps ===3" />
    </div>
    <OrgFooter v-if="steeps==0" />
    <OrgFooterInterna 
      :next="next"
      :total="price"
      :engine="engines[engineIndex]"
      :color="colors.items[colorIndex]"
      :wheel="wheels[wheelIndex]"
      :steep="steeps"  
      v-if="steeps > 0 && steeps<4 && engines.length" />
  </div>
</template>

<script>
import OrgHeader from './components/OrgHeader'
import OrgFooter from './components/OrgFooter-home'
import OrgFooterInterna from './components/OrgFooterResult'
import StartApp from './components/StartApp'
import EngineForm from './components/EngineForm'
import ColorForm from './components/ColorForm'
import wheelsForm from './components/wheelsForm'
import { Request } from './request'

export default {
  name: 'app',
  components: {
    OrgHeader,
    OrgFooter,
    OrgFooterInterna,
    StartApp,
    EngineForm,
    ColorForm,
    wheelsForm
  },
  data() {
    return {
      steeps: 0,
      total: 0,
      colors: {},
      wheels:[],
      engines:[],
      engineIndex: 0,
      colorIndex: 0,
      wheelIndex: 0,
      price: 0,
    }
  },
  methods: {
    next() {
      this.steeps ++;
    },
    engineChild(index) {
      this.engineIndex = index
    },
    colorChild(index) {
      this.colorIndex = index
    },
    wheelChild(index) {
      this.wheelIndex = index
    }
  },
  mounted: function() {
    Request()
    .then((response)=> {
      Object.assign(this.colors, response.data.color);
      this.wheels = response.data.wheels.items;
      this.engines = response.data.engine.items;
      this.price = response.data.price;
    })
    .catch((error)=> {
      console.log(error);
    });
  }
}
</script>
