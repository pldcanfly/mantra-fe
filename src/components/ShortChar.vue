<style lang="scss" scoped>
.shortchar {
  $height: 25px;

  background-color: $c-dark-grey;
  display: flex;
  height: $height;
  line-height: $height;
  width: 200px;

  .roleicon {
    height: $height;
    width: $height;
    background-color: $c-light-grey;
    .icon {
      height: $height;
      width: $height;
    }
  }

  .name {
    padding-left: 5px;
  }

  &.clicked {
    background-color: $c-light-grey;
  }
}
</style>

<template>
  <div class="shortchar" :class="{ clicked: clicked }" @click="charClicked">
    <div class="roleicon">
      <img class="icon" :src="clazz.speccs[character.specc].picture" />
    </div>
    <div class="name" :style="`color:${clazz.color}`">{{ character.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    character: { type: Object, required: true },
  },
  setup(props) {
    const store = useStore();
    const clicked = ref(false);

    const charClicked = (test: any) => {
      clicked.value = !clicked.value;
    };

    const clazz = store.getters['getClassById'](props.character.class);

    return {
      clicked,
      charClicked,
      clazz,
    };
  },
});
</script>
