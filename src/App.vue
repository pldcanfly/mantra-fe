<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';

body {
  background-color: $c-dark-grey;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: $c-text;

  .form-element {
    position: relative;
    margin-top: 25px;
    input,
    textarea {
      border-radius: 0;
      border: 0;
      background-color: $c-medium-grey;
      color: $c-text;
      transition: all $transition-length;

      &:hover,
      &:focus {
        background-color: $c-light-grey;
      }
    }

    .form-control {
      padding: 5px;
    }

    label {
      transition: all $transition-length;
      position: absolute;
      transform: translate(0, 0);
      opacity: 0;
      // top: -12px;
      // left: -5px;
    }
  }
  .form-element {
    label.hasvalue {
      transform: translate(12px, -15px);
      opacity: 1;
    }
  }

  .page {
    padding-top: $header-height;

    .headline {
      background-color: $c-medium-grey;
      display: inline-block;
      padding: 40px;
      padding-top: 10px;
      padding-bottom: 10px;
      box-shadow: $box-shadow;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .subheadline {
      display: inline-block;
      position: relative;
      margin-top: 40px;
      margin-bottom: 40px;
      // padding-right: 10px;
      border-bottom: 2px solid $c-light-grey;

      // &::after {
      //   position: absolute;
      //   transform: rotate(45deg);
      //   content: '';
      //   display: block;
      //   height: 20px;
      //   width: 2px;
      //   bottom: -10px;
      //   right: 0;
      //   background-color: $c-light-grey;
      // }
    }
  }

  a {
    color: $c-light-green;
    text-decoration: none;
  }
}
</style>

<template>
  <div class="page">
    <Header></Header>
    <h1 class="headline">{{ headline }}</h1>
    <router-view v-slot="{ Component }">
      <component :is="Component" class="pagecontainer" />
    </router-view>
    <Debug />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, computed } from 'vue';

import Header from './components/Header.vue';
import Debug from './components/util/Debug.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    Header,
    Debug,
  },
  setup() {
    const router = useRouter();
    const headline = ref();

    provide('setHeadline', (hl: string) => {
      headline.value = hl;
    });

    return {
      headline,
    };
  },
});
</script>
