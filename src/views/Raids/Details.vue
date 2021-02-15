<style lang="scss">
#raiddetails {
  .row {
    margin-left: 0;
    margin-right: 0;
  }
  .intro {
    display: flex;
    margin-bottom: 40px;
    .picture {
      width: 100px;
      margin-right: 15px;
    }
  }
  .shortchar,
  .raidspot {
    margin-bottom: 2px;
    width: 150px;
  }
}
</style>

<template>
  <div id="raiddetails">
    <div class="intro">
      <div class="picture">
        <img :src="raid.picture" />
      </div>
      <div class="text">
        <h1>{{ raid.name }}</h1>
        <div class="text-content">
          {{ raid.description }}
          {{ raid }}
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-2">
        Angemeldet:
        <ShortChar v-for="(char, index) in signed" :key="index" :character="char" />
      </div>
      <div class="col-2">
        Abgemeldet:
        <ShortChar v-for="(char, index) in rejected" :key="index" :character="char" />
      </div>
      <div class="col-2">
        Ersatzbank:
        <RaidSpot>Drop here</RaidSpot>
      </div>
      <div class="col-4">
        <Raid />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import ShortChar from '../../components/ShortChar.vue';
import RaidSpot from '../../components/RaidSpot.vue';
import Raid from '../../components/Raid.vue';

export default defineComponent({
  components: {
    ShortChar,
    RaidSpot,
    Raid,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const raidid = computed(() => router.currentRoute.value.params.id);

    const raid = computed(() => store.getters.getEventById(raidid.value));
    const signups = computed(() => store.getters.getSignups(raidid.value));
    const signed = computed(() => signups.value.signed.map((item: number) => store.getters.getChar(item)));
    const rejected = computed(() => signups.value.rejected.map((item: number) => store.getters.getChar(item)));

    return {
      raid,
      raidid,
      signed,
      rejected,
    };
  },
});
</script>
