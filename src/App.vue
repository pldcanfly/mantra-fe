<style lang="scss">
@import '~bootstrap';
body {
  background-color: $c-dark-grey;
}

#app {
  padding: 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: $c-text;
}
</style>

<template>
  <div class="container-fluid pagecontainer">
    <div class="row">
      <div class="col-2">
        <Sidebar />
      </div>
      <div class="col-10">
        <Navigation />
        <router-view />
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
