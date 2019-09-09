<template>
  <div id="app">
    <OrgHeader/>
    <div class="model--wrap">
      <StartApp v-if="steeps===0" :next="next"/>
      <EngineForm @clicked="onClickChild" v-if="steeps===1" :next="next" :engines="engines"/>
    </div>
    <OrgFooter v-if="steeps==0" />
    <!-- <OrgFooterInterna 
      :next="next"
      :total="price"
      :engine="engines[engineIndex].price"
      
      v-if="steeps > 0 & steeps<4" /> -->
  </div>
</template>

<script>
import OrgHeader from './components/OrgHeader'
import OrgFooter from './components/OrgFooter-home'
//import OrgFooterInterna from './components/OrgFooterResult'
import StartApp from './components/StartApp'
import EngineForm from './components/EngineForm'
import { Request } from './request'

export default {
  name: 'app',
  components: {
    OrgHeader,
    OrgFooter,
    //OrgFooterInterna,
    StartApp,
    EngineForm,
  },
  data() {
    return {
      steeps: 1,
      total: 0,
      colors: [],
      wheels:[],
      engines:[],
      engineIndex: 0,
      colorIndex: 0,
      whellIndex: 0,
      price: 0,
    }
  },
  methods: {
    next() {
      this.steeps ++;
    },
    onClickChild(index) {
      this.engineIndex = index
    }
  },
  mounted: function() {
    Request()
    .then((response)=> {
      this.colors - response.data.color.items;
      this.wheels = response.data.wheels.items;
      this.engines = response.data.engine.items;
      this.price = response.data.price;
      console.log(response.data.engine.items) 
      console.log(this.engines);
    })
    .catch((error)=> {
      console.log(error);
    });
    console.log('---------------debug--------');
  }
}
</script>
