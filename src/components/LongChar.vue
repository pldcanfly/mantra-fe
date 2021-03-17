<style lang="scss" scoped>
.longchar {
  background-color: $c-medium-grey;
  position: relative;
  width: 100%;
  max-width: 180px;
  padding-bottom: 60px;

  min-height: 50px;

  .text {
    margin-top: 15px;
    text-align: center;
  }

  .icons {
    img {
      width: 60px;
      height: auto;
    }
  }

  input {
    width: 100%;
  }

  .controls {
    position: absolute;
    bottom: 0;
    height: 35px;
    width: 100%;
    font-size: 15px;
    text-align: center;
    button {
      height: 35px;
      width: 50%;
      padding: 0 !important;

      &.delete {
        background-color: $c-red !important;
        &:hover {
          background-color: $c-light-red !important;
        }
      }
    }
  }
}
</style>

<template>
  <div class="longchar" v-if="!edit">
    <div class="icons">
      <img class="icon" :src="char.female ? race.picture.female : race.picture.male" />
      <img class="icon" :src="clazz.picture" />
      <img class="icon" :src="clazz.speccs[char.specc].picture" />
    </div>
    <div class="text">
      <h3 :style="`color:${clazz.color}`">{{ char.name }}</h3>
      <div>{{ race.name }}</div>
      <div>{{ clazz.name }}</div>
      <div>{{ clazz.speccs[char.specc].name }}</div>
    </div>
    <div class="controls"><button class="delete">Löschen</button><button class="save" @click="editClick">Bearbeiten</button></div>
  </div>
  <LongCharForm v-if="edit" :character="character" />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import LongCharForm from '../components/LongCharForm.vue';

export default defineComponent({
  components: {
    LongCharForm,
  },
  props: {
    character: { type: Object as () => Char, required: true },
  },
  setup(props) {
    const store = useStore();
    const char = ref(props.character);
    const edit = ref(false);

    const clazz = computed(() => store.getters['getClassById'](char.value.class));
    const race = computed(() => store.getters['getRaceById'](char.value.race));

    const editClick = () => (edit.value = true);

    return {
      clazz,
      char,
      race,
      edit,
      editClick,
    };
  },
});
</script>
