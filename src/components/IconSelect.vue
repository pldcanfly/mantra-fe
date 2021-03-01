<style lang="scss">
.iconselector {
  .icon {
    width: 70px;
    height: 70px;
    display: inline-block;
    background-size: cover;
    filter: grayscale(1);
    cursor: pointer;
    margin: 2px;
    transition: all $transition-length;
    border: 0px solid $c-light-grey;

    &.active {
      filter: grayscale(0);
      border: 2px solid $c-light-green;
      //transform: translateY(5px);
    }
  }
}
</style>

<template>
  <div class="iconselector">
    <img class="icon" :class="{ active: active == icon }" :src="`${icon}`" :key="icon" v-for="icon in icons" @click="activate(icon)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    const icons = ['icons/archimonde.png', 'icons/grulls.png', 'icons/illidan.png', 'icons/kara.png', 'icons/keal.png', 'icons/kj.png', 'icons/naxx.png', 'icons/vashij.png'];

    const active = computed({
      get: () => props.modelValue,
      set: (id: any) => emit('update:modelValue', id),
    });

    const activate = (name: string) => {
      active.value = name;
    };

    return {
      activate,
      active,
      icons,
    };
  },
});
</script>
