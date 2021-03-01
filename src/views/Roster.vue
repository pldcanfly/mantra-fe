<style lang="scss" scoped>
.icon {
  width: 30px;
  height: 30px;
  margin: 1px;
  border: 1px solid $c-light-grey;
}
</style>

<template>
  <div class="roster">
    <div class="container-fluid" :key="index" v-for="(char, index) in mains">
      <div class="row">
        <div class="col-2" :style="`color:${getClassById(char.class).color}`">{{ char.name }}</div>
        <div class="col-10">
          <img class="icon" :src="char.female ? getRaceById(char.race).picture.female : getRaceById(char.race).picture.male" />
          <img class="icon" :src="getClassById(char.class).picture" />
          <img class="icon" :src="getClassById(char.class).speccs[char.specc].picture" />
        </div>
      </div>

      <div class="row twink" :key="index" v-for="(twink, index) in char.twinks">
        <div class="col-2" :style="`color:${getClassById(twink.class).color}`">- {{ twink.name }} (T)</div>
        <div class="col-10">
          <img class="icon" :src="twink.female ? getRaceById(twink.race).picture.female : getRaceById(twink.race).picture.male" />
          <img class="icon" :src="getClassById(twink.class).picture" />
          <img class="icon" :src="getClassById(twink.class).speccs[twink.specc].picture" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const mains = store.getters['getMains'];
    mains.value = mains.map((char: any) => {
      char.twinks = store.getters['getTwinks'](char.id);
    });

    (inject('setHeadline') as Function)('Roster');

    return {
      getClassById: store.getters['getClassById'],
      getRaceById: store.getters['getRaceById'],
      mains,
    };
  },
});
</script>
