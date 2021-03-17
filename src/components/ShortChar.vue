<style lang="scss" scoped>
.shortchar {
  $height: 35px;
  background-color: $c-medium-grey;
  height: $height;
  line-height: $height;
  width: 100%;
  max-width: 300px;

  .info-container {
    display: flex;
    align-items: center;
    .roleicon {
      height: $height;
      width: $height;
      background-size: cover;
    }

    .name {
      padding-left: 5px;
      height: $height;
    }
  }
}
</style>

<template>
  <div class="shortchar">
    <div class="info-container">
      <div class="roleicon" :style="`background-image:url(${clazz.speccs[character.specc].picture})`"></div>
      <div class="name" :style="`color:${clazz.color}`">{{ character.name }}</div>
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

    return {
      clazz,
    };
  },
});
</script>
