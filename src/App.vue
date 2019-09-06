<template>
  <div id="app">
    <OrgHeader/>
    <div class="model--wrap">
      <StartApp/>

    </div>
    <OrgFooter/>
  </div>
</template>

<script>
import OrgHeader from './components/OrgHeader'
import OrgFooter from './components/OrgFooter-home'
import StartApp from './components/StartApp'

export default {
  name: 'app',
  components: {
    OrgHeader,
    OrgFooter,
    StartApp
  },
  data: function() {
    return {
      steeps: 0,
      total: 0,

    }
  }
}
</script>

<style lang="scss">

</style>
