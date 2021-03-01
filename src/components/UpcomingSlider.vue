<style lang="scss" scoped>
.slider {
}
</style>

<template>
  <div class="slider"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const raids = computed(() => store.state.events);
    return {
      raids,
    };
  },
});
</script>
