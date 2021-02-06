<style lang="scss">
#navigation {
  .nav-item {
    display: inline-block;
    background-color: $c-medium-grey;
    font-size: 26px;
    margin-right: 6px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    height: 50px;
    transform: translateY(10px);
    transition: background-color 0.5s;

    &:hover {
      background-color: $c-light-grey;
    }

    &.router-link-active {
      border: $c-border;
      border-bottom: none;

      height: 70px;
    }
  }
}
</style>

<template>
  <nav id="navigation">
    <router-link class="nav-item" :to="{ name: 'Raids' }">Raids</router-link>
    <router-link class="nav-item" :to="{ name: 'Roster' }">Roster</router-link>
    <!--  <router-link class="nav-item" to="#asdf"><s>Items</s></router-link>
    <router-link class="nav-item" to="#asdf"><s>Consumes</s></router-link>
    <router-link class="nav-item" to="#asdf"><s>Professions</s></router-link>-->
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
