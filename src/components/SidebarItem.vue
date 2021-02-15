<style lang="scss" scoped>
.item {
  display: flex;
  margin: 0;

  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
  .picture {
    background-color: $c-light-grey;

    .icon {
      width: 100px;
      height: 100px;
    }
  }

  .content {
    margin-left: 10px;
    align-self: center;
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
      <img class="icon" :src="event.picture" />
    </div>
    <div class="content">
      <div class="name">
        {{ event.name }}
      </div>
      <div class="date">
        {{ event.date }}
      </div>
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
