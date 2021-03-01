<template>
  <teleport to="body">
    <div id="debug">
      Debug: <br />
      <!-- Screenwidth: {{ width }}px<br />
      Menustate: {{ menustate }} <br />
      Searchstate: {{ searchstate }}<br /> -->
      <pre>{{ store.state.pickedup }}</pre>
      <span class="storestatebutton" @click="toggleState" v-if="!showState">Show Store</span>
      <span class="storestatebutton" @click="toggleState" v-if="showState">Hide Store</span>
      <pre v-if="showState">{{ store.state }}</pre>
      <br />

      <span class="storestatebutton" @click="toggleRoute" v-if="!showRoute">Show RouteMeta</span>
      <span class="storestatebutton" @click="toggleRoute" v-if="showRoute">Hide RouteMeta</span><br />
      <pre v-if="showRoute">{{ route.meta }}</pre>
      <br />
    </div>
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const showState = ref(false);
    const showRoute = ref(false);
    const route = useRoute();
    return {
      // width: computed(() => store.state.windowsize),
      // menustate: computed(() => store.state.menustate),
      // searchstate: computed(() => store.state.searchstate),
      showState,
      store,
      route,
      showRoute,
      toggleRoute: () => (showRoute.value = !showRoute.value),
      toggleState: () => (showState.value = !showState.value),
    };
  },
});
</script>

<style lang="scss">
#debug {
  border-top: 1px dashed red;
  border-left: 1px dashed red;
  padding: 10px;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  right: 0;
  max-height: 100vh;
  overflow-y: scroll;
  border-top-left-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  z-index: 10000000;
  .storestatebutton {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
