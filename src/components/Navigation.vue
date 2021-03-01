<style lang="scss" scoped>
.navigation {
  display: flex;

  &.right {
    justify-content: flex-end;
  }

  .logo {
    display: inline-block;
    height: $header-height;
    line-height: $header-height;
    margin-right: 20px;
  }
  .nav-item {
    padding: 10px;
    padding-top: 0;
    padding-bottom: 0;
    display: inline-block;
    height: $header-height;
    line-height: $header-height;
    transition: all $transition-length;
    cursor: pointer;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    &:hover {
      background-color: $c-light-grey;
    }

    &.router-link-active,
    &.active {
      background-color: $c-light-grey;
    }
  }
}
</style>

<template>
  <nav class="navigation" :class="{ right }">
    <div class="logo" v-if="logo">
      {{ logo }}
    </div>
    <span :key="index" v-for="(item, index) in items">
      <router-link class="nav-item" :to="item.props" v-if="item.type == 'link'">{{ item.text }}</router-link>
      <span class="nav-item" @click="item.props" v-if="item.type == 'click'">{{ item.text }}</span>
    </span>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    right: Boolean,
    items: {
      type: Array,
      default: () => [],
    },
    logo: {
      type: String,
    },
  },
});
</script>
