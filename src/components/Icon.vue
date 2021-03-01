<style lang="scss"></style>

<template>
  <svg viewBox="0 0 24 24" :width="width" :height="height">
    <path :d="path" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    path: { type: String, required: true },
    width: { type: Number, default: 50 },
    height: { type: Number, default: 50 },
  },
});
</script>
