<template>
  <div id="app">
    <portfolio-header />
    <!-- 
      Keeps home route alive to give a cleaner experience to users.
      Doesn't allow subroutes to be kept alive, as their computed properties
      don't exist on route change, and this caused some errors.
    -->
    <keep-alive v-if="$route.name === 'home'">
      <router-view />
    </keep-alive>
    <router-view v-else />
    <portfolio-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioHeader from '@/components/layout/Header.vue';
import PortfolioFooter from '@/components/layout/Footer.vue';

export default Vue.extend({
  name: 'app',
  components: {
    PortfolioHeader,
    PortfolioFooter,
  },
  metaInfo: {
    titleTemplate: 'Portfolio %s',
  },
});
</script>

<style lang="scss">
@import './scss/globals';
</style>
