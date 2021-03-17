<style lang="scss">
#profile {
  .charlist {
    display: flex;
    flex-wrap: wrap;
    .longchar,
    .newchar,
    .longcharform {
      margin-bottom: 15px;
      margin-right: 15px;
      box-shadow: $box-shadow;
    }

    .newchar {
      width: 180px;

      min-height: 100px;
      background-color: $c-medium-grey;
      position: relative;
      cursor: pointer;
      transition: all $transition-length;

      .newcharicon {
        transition: all $transition-length;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        fill: $c-green;
      }
      &:hover {
        background-color: $c-light-grey;
        .newcharicon {
          fill: $c-light-green;
        }
      }
    }
  }
}
</style>

<template>
  <div id="profile">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">ID: {{ account.id }}</div>
        <div class="col-12">Accountname: {{ account.username }}</div>
      </div>
      <div class="row">
        <div class="col-12"><h2 class="subheadline">Meine Charaktere</h2></div>
      </div>

      <div class="row">
        <div class="col-12 charlist">
          <LongChar :character="char" :key="char" v-for="char in chars" />
          <LongCharForm v-if="showNewchar" />
          <div class="newchar" @click="onNewchar" v-if="!showNewchar">
            <Icon :path="mdiPlusBox" class="newcharicon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed, ref } from 'vue';
import { useStore } from 'vuex';
import LongChar from '../components/LongChar.vue';
import LongCharForm from '../components/LongCharForm.vue';
import { mdiPlusBox } from '@mdi/js';

export default defineComponent({
  components: {
    LongChar,
    LongCharForm,
  },
  setup() {
    const store = useStore();

    const account = computed(() => store.getters.accountInfo);
    const chars = computed(() => store.getters.getCharsForAccount(account.value.id));
    const showNewchar = ref(false);
    const newchar = ref({ name: 'Name', class: 1, race: 1, specc: 1, female: false });
    const onNewchar = () => {
      showNewchar.value = true;
    };

    (inject('setHeadline') as Function)('Mein Profil');

    return { account, chars, mdiPlusBox, newchar, showNewchar, onNewchar };
  },
});
</script>
