<style lang="scss">
header {
  top: 0;
  height: $header-height;
  background-color: $c-medium-grey;
  position: fixed;
  z-index: 999;
  //box-shadow: $box-shadow;

  .row {
    height: $header-height;
    box-shadow: $box-shadow;
    z-index: 2;
  }

  .loginform {
    width: 100%;
    max-width: 300px;
    background-color: $c-medium-grey;
    border: 1px solid $c-dark-grey;
    box-shadow: $box-shadow;

    padding: 15px;
    z-index: 1;
    position: absolute;
    right: 40px;
    top: $header-height + 40px;

    .form-element {
      input {
        background-color: $c-dark-grey !important;

        &:hover,
        &:focus {
          background-color: $c-light-grey !important;
        }
      }
    }

    .close {
      top: 15px;
      right: 15px;
      position: absolute;
      fill: $c-red;
      cursor: pointer;
      transition: fill $transition-length;

      &:hover {
        fill: $c-light-red;
      }
    }
  }
}
</style>

<template>
  <header class="container-fluid">
    <div class="row">
      <Navigation :items="navitems" logo="Mantra Raidplaner" class="col-6" />
      <Navigation :items="useritems" right class="col-6" />
    </div>
    <div class="loginform" v-if="loginOpen">
      <h2>Login</h2>
      <Icon class="close" :path="mdiCloseBox" @click="loginToggle" :width="35" :height="35" />

      <div class="form-element">
        <label for="login_username" :class="{ hasvalue: login.username != '' }">Username</label>
        <input class="form-control" type="text" id="login_username" placeholder="Username" v-model="login.username" />
      </div>
      <div class="form-element">
        <label for="login_password" :class="{ hasvalue: login.password != '' }">Password</label>
        <input class="form-control" type="text" id="login_password" placeholder="Password" v-model="login.password" />
      </div>
      <div class="form-element">
        <button @click="onLogin">Login</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navigation from './Navigation.vue';
import { mdiCloseBox } from '@mdi/js';

import { useStore } from 'vuex';

export default defineComponent({
  components: {
    Navigation,
  },
  setup() {
    const store = useStore();
    const navitems = ref();
    const useritems = ref();
    const loginOpen = ref(false);
    const login = ref({ username: '', password: '' });

    navitems.value = [
      { type: 'link', props: { name: 'Raids' }, text: 'Raids' },
      { type: 'link', props: { name: 'Roster' }, text: 'Roster' },
    ];

    const loginToggle = () => {
      loginOpen.value = !loginOpen.value;
    };

    useritems.value = [
      {
        type: 'click',
        props: loginToggle,
        text: 'Login',
        active: loginOpen.value,
      },
      { type: 'link', props: { name: 'Profile' }, text: 'Mein Profil' },
    ];

    const onLogin = () => {
      store.dispatch('login', login.value);
    };

    return {
      navitems,
      useritems,
      loginOpen,
      login,
      loginToggle,
      onLogin,
      mdiCloseBox,
    };
  },
});
</script>
