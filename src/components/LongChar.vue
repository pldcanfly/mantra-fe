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

  input {
    width: 100%;
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
      <img class="icon" :src="char.female ? race.picture.female : race.picture.male" />
      <img class="icon" :src="clazz.picture" />
      <img class="icon" :src="clazz.speccs[char.specc].picture" />
    </div>
    <div class="text">
      <h3 :style="`color:${clazz.color}`">{{ char.name }}</h3>
      <div>{{ race.name }}</div>
      <div>{{ clazz.name }}</div>
      <div>{{ clazz.speccs[char.specc].name }}</div>
    </div>
    <div class="controls"><a href="#">Löschen</a> <span>|</span> <a href="#">Bearbeiten</a></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    character: { type: Object, required: true },
    edit: { type: Boolean, default: false },
  },
  setup(props) {
    const store = useStore();
    const char = ref(props.character);

    const clazz = computed(() => store.getters['getClassById'](char.value.class));
    const race = computed(() => store.getters['getRaceById'](char.value.race));

    return {
      clazz,
      char,
      race,
    };
  },
});
</script>
