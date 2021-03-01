<template>
  <div class="raids">
    <div class="container-fluid">
      <router-link :to="{ name: 'RaidNew' }">Neuer Raid</router-link>

      <div class="row">
        <div class="col-12" :key="index" v-for="(event, index) in events">
          <router-link :to="{ name: 'RaidDetail', params: { id: event.id } }">{{ event.date }} - {{ event.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    (inject('setHeadline') as Function)('Raid Übersicht');

    const events = store.getters['getEvents'];

    return {
      events,
    };
  },
});
</script>
