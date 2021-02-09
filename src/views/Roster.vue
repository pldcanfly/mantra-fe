<style lang="scss" scoped>
.icon {
  width: 30px;
  height: 30px;
}
</style>

<template>
  <div class="roster">
    <div class="container-fluid" :key="index" v-for="(char, index) in mains">
      <div class="row">
        <div class="col-2">{{ char.name }}</div>
        <div class="col-10">
          <img class="icon" :src="char.female ? getRaceById(char.race).picture.female : getRaceById(char.race).picture.male" />
          <img class="icon" :src="getClassById(char.class).picture" />
          {{ getClassById(char.class).speccs[char.specc].name }}
        </div>
      </div>

      <div class="row twink" :key="index" v-for="(twink, index) in char.twinks">
        <div class="col-2">---- {{ twink.name }}</div>
        <div class="col-10">
          <img class="icon" :src="twink.female ? getRaceById(twink.race).picture.female : getRaceById(twink.race).picture.male" />
          <img class="icon" :src="getClassById(twink.class).picture" />
          {{ getClassById(twink.class).speccs[twink.specc].name }}
        </div>
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
