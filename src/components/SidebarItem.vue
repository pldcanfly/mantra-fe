<style lang="scss" scoped>
.item {
  margin: 0;
  .picture {
    background-color: $c-light-grey;
  }

  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: $c-light-grey;
  }

  &.router-link-exact-active {
    background-color: $c-light-grey;
  }
}
</style>

<template>
  <router-link tag="div" class="item" :to="{ name: 'RaidDetail', params: { id: event.id } }">
    <div class="picture">
      {{ event.picture }}
    </div>
    <div class="content">
      {{ event.name }}
    </div>
    <div class="date">
      {{ event.date }}
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  //   setup(props) {
  //     const router = useRouter();
  //     const current = router.currentRoute.value.params.id;
  //     return {
  //       router,
  //     };
  //   },
});
</script>
