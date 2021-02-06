<template>
  <div class="raids">
    {{ events }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const events = store.getters['getEvents'];

    return {
      events,
    };
  },
});
</script>
