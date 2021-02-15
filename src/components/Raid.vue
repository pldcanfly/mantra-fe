<style lang="scss" scoped></style>

<template>
  <div class="raid">
    {{ groups }}
    <div class="row">
      <div class="col-6" :key="groupnumber" v-for="(group, groupnumber) in groups">
        Gruppe {{ groupnumber }}
        <RaidSpot :key="spotnumber" v-for="(spot, spotnumber) in group">
          {{ spot }}
        </RaidSpot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RaidSpot from './RaidSpot.vue';

type RaidGroups = {
  [propName: number]: Array<string>;
};

export default defineComponent({
  components: {
    RaidSpot,
  },
  props: {
    size: {
      type: Number,
      default: 25,
    },
  },
  setup(props) {
    const groups: RaidGroups = {};

    for (let i = 1; i <= props.size; i++) {
      const group = Math.ceil(i / 5);
      if (!groups[group]) groups[group] = [];
      groups[group].push('HI');
    }
    return {
      groups,
    };
  },
});
</script>
