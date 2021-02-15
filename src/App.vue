<style lang="scss">
@import '~bootstrap';
body {
  background-color: $c-dark-grey;
}

#app {
  padding: 5px;
  @media (min-width: 600px) {
    padding: 15px;
  }
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: $c-text;

  .pagecontainer {
    border: $c-border;
    background-color: $c-medium-grey;
    box-shadow: $box-shadow;
    padding: 5px;
    @media (min-width: 600px) {
      padding: 15px;
    }
    min-height: 90vh;
    @media (min-width: 600px) {
      padding: 15px;
    }
  }
}
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-lg-2 col-12">
        <Sidebar />
      </div>
      <div class="col-md-8 col-lg-10 col-12">
        <Navigation />
        <router-view v-slot="{ Component }">
          <component :is="Component" class="pagecontainer" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from './components/Navigation.vue';
import Sidebar from './components/Sidebar.vue';

export default defineComponent({
  components: {
    Navigation,
    Sidebar,
  },
});
</script>
