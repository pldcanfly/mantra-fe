<style lang="scss">
.shortcharselect {
  .shortchar.selected {
    background-color: $c-light-grey;
  }
}
</style>

<template>
  <div class="shortcharselect">
    <ShortChar :class="{ selected: selected == char.id }" :character="char" :key="char.id" v-for="char in characters" @click="click(char.id)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ShortChar from './ShortChar.vue';

export default defineComponent({
  components: {
    ShortChar,
  },

  props: {
    characters: { type: Object, required: true },
    modelValue: Number,
  },
  setup(props, { emit }) {
    const selected = computed({
      get: () => props.modelValue,
      set: (id: any) => emit('update:modelValue', id),
    });

    const click = (id: number) => {
      selected.value = id;
    };

    return {
      selected,
      click,
    };
  },
});
</script>
