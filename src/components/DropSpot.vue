<style lang="scss" scoped>
.raidspot {
  $height: 35px;

  background-color: $c-dark-grey;
  display: flex;
  height: $height;
  line-height: $height;
  width: 100%;
  max-width: 300px;
  font-size: 13px;
  color: $c-light-grey;
  border: 1px solid $c-light-grey;

  transition: all 0.2s;

  &:hover {
    background-color: $c-light-grey;
    color: #fff;
  }

  &.free {
    //background-color: $c-highlight-green;
    //color: #000;
  }

  .name {
    padding-left: 5px;
  }
}
</style>

<template>
  <div class="raidspot" :class="{ free: pickedup }">
    <div class="name">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    nohide: { type: Boolean, default: false },
  },
  setup(props) {
    const store = useStore();
    const pickedup = computed(() => store.state.pickedup != -1);

    return {
      pickedup,
    };
  },
});
</script>
