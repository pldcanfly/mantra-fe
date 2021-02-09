<style lang="scss" scoped>
.items {
  background-color: $c-medium-grey;
  border: $c-border; 
  padding: 5px;
  box-shadow: $box-shadow;
}
</style>

<template>
  <div>
    <h2>Upcoming Events</h2>
    <div class="items container-fluid">
      <SidebarItem :event="event" :key="index" v-for="(event, index) in events" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarItem from './SidebarItem.vue';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    SidebarItem,
  },
  setup() {
    const store = useStore();

    const events = store.getters['getEvents'];
    return {
      events,
    };
  },
});
</script>
