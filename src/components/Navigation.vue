<style lang="scss"></style>

<template>
  <nav id="navigation">
    <router-link :to="{ name: 'Raids' }">Raids</router-link>
    <router-link :to="{ name: 'Roster' }">Roster</router-link>
    <router-link to="#"><s>Items</s></router-link>
    <router-link to="#"><s>Consumes</s></router-link>
    <router-link to="#"><s>Professions</s></router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
