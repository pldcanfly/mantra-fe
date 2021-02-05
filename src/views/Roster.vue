<style lang="scss" scoped></style>

<template>
  <div class="roster">
    <h1>Roster</h1>

    <div class="container-fluid" :key="index" v-for="(char, index) in mains">
      <div class="row">
        <div class="col-2">{{ char.name }}</div>
        <div class="col-1">{{ getRaceById(char.race).name }}</div>
        <div class="col-1">{{ getClassById(char.class).name }}</div>
        <div class="col-1">{{ getClassById(char.class).speccs[char.specc].name }}</div>
      </div>

      <div class="row twink" :key="index" v-for="(twink, index) in char.twinks">
        <div class="col-2">---- {{ twink.name }}</div>
        <div class="col-1">{{ getRaceById(twink.race).name }}</div>
        <div class="col-1">{{ getClassById(twink.class).name }}</div>
        <div class="col-1">{{ getClassById(char.class).speccs[twink.specc].name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const mains = store.getters['getMains'];
    mains.value = mains.map((char: any) => {
      char.twinks = store.getters['getTwinks'](char.id);
    });

    return {
      getClassById: store.getters['getClassById'],
      getRaceById: store.getters['getRaceById'],
      mains,
    };
  },
});
</script>
