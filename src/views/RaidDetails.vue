<style lang="scss">
#raiddetails {
  .row {
    margin-left: 0;
    margin-right: 0;
  }
  .intro {
    .picture {
      border: 1px solid black;
      background-color: $c-light-grey;
    }
  }
  .shortchar {
    margin-bottom: 2px;
    width: 150px;
  }
}
</style>

<template>
  <div id="raiddetails">
    <div class="row intro">
      <div class="col-3 picture">
        {{ raid.picture }}
      </div>
      <div class="col-9 text">
        <h1>{{ raid.name }}</h1>
        <div class="text-content">
          {{ raid.description }}
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        Angemeldet:
        <ShortChar v-for="index in 25" :key="index" :character="{ name: 'Honra' }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';
import ShortChar from '../components/ShortChar.vue';

export default defineComponent({
  components: {
    ShortChar,
  },
  setup() {
    const router = useRouter();
    const raidid = computed(() => router.currentRoute.value.params.id);
    const raid = {
      id: raidid,
      name: 'This is a Raid',
      picture: '1',
      description: 'Hier werden sie gebraucht! Raiden sie noch heute mit Mantra und gewinnen sie einmal niemals Lok looten.',
      date: '19.2.2021',
    };
    return {
      raid,
      raidid,
    };
  },
});
</script>
