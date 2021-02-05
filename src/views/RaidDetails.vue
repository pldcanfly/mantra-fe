<template>
  <div class="home"></div>
  ID: {{ raidid }}
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const raidid = computed(() => router.currentRoute.value.params.id);
    return {
      raidid,
    };
  },
});
</script>
