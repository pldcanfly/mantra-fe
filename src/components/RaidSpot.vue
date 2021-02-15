<style lang="scss" scoped>
.raidpsot {
  $height: 25px;

  background-color: $c-dark-grey;
  display: flex;
  height: $height;
  line-height: $height;
  width: 200px;

  .name {
    padding-left: 5px;
  }
}
</style>

<template>
  <div class="raidpsot">
    <div class="name">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
