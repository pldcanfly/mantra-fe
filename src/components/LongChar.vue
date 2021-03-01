<style lang="scss" scoped>
.longchar {
  background-color: $c-medium-grey;

  width: 100%;
  max-width: 162px;
  height: 100%;
  min-height: 50px;
  padding-bottom: 15px;

  .text {
    margin-top: 25px;
    text-align: center;
  }

  .icons {
    img {
      width: 54px;
      height: auto;
    }
  }

  .controls {
    margin-top: 25px;
    font-size: 15px;
    text-align: center;
  }
}
</style>

<template>
  <div class="longchar">
    <div class="icons">
      <img class="icon" :src="character.female ? race.picture.female : race.picture.male" />
      <img class="icon" :src="clazz.picture" />
      <img class="icon" :src="clazz.speccs[character.specc].picture" />
    </div>
    <div class="text">
      <h3 :style="`color:${clazz.color}`">{{ character.name }}</h3>
      <div>{{ clazz.name }}</div>
      <div>{{ race.name }}</div>
      <div>{{ clazz.speccs[character.specc].name }}</div>
    </div>
    <div class="controls">
      Löschen | Bearbeiten
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    character: { type: Object, required: true },
  },
  setup(props) {
    const store = useStore();

    const clazz = store.getters['getClassById'](props.character.class);
    const race = store.getters['getRaceById'](props.character.race);

    return {
      clazz,
      race,
    };
  },
});
</script>
