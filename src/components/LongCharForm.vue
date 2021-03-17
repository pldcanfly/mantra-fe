<style lang="scss" scoped>
.longcharform {
  background-color: $c-medium-grey;

  width: 100%;
  max-width: 180px;

  min-height: 50px;
  padding-bottom: 15px;
  position: relative;

  input {
    width: 100%;
    border: 0;
    border-radius: 0;

    background-color: $c-dark-grey;
    color: $c-text;
    font-size: 20px;
  }

  .race,
  .class {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;

    .reset {
      margin-left: 10px;
      fill: $c-light-green;
      cursor: pointer;
      height: 25px;

      &:hover {
        fill: $c-green;
      }
    }

    img {
      cursor: pointer;
      filter: grayscale(1);
      opacity: 0.7;
      width: 20%;

      &.active {
        transition: all $transition-length;
        margin-left: 15px;
        border: 1px solid $c-light-green;
        filter: grayscale(0);
        opacity: 1;
      }
    }
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
      width: 100%;
      padding: 0 !important;
    }
  }
}
</style>

<template>
  <div class="longcharform">
    <input class="form-control" placeholder="Name" type="text" v-model="name" />

    <div class="race" v-if="race != 0 || name != ''">
      <img src="raceicons/orcm.png" :class="{ active: race == 1 && !female }" @click="onRaceClick(1, false)" v-if="race == 0 || (race == 1 && !female)" />
      <img src="raceicons/undeadm.png" :class="{ active: race == 2 && !female }" @click="onRaceClick(2, false)" v-if="race == 0 || (race == 2 && !female)" />
      <img src="raceicons/taurenm.png" :class="{ active: race == 3 && !female }" @click="onRaceClick(3, false)" v-if="race == 0 || (race == 3 && !female)" />
      <img src="raceicons/trollm.png" :class="{ active: race == 4 && !female }" @click="onRaceClick(4, false)" v-if="race == 0 || (race == 4 && !female)" />
      <img src="raceicons/bem.png" :class="{ active: race == 5 && !female }" @click="onRaceClick(5, false)" v-if="race == 0 || (race == 5 && !female)" />
      <img src="raceicons/orcf.png" :class="{ active: race == 1 && female }" @click="onRaceClick(1, true)" v-if="race == 0 || (race == 1 && female)" />
      <img src="raceicons/undeadf.png" :class="{ active: race == 2 && female }" @click="onRaceClick(2, true)" v-if="race == 0 || (race == 2 && female)" />
      <img src="raceicons/taurenf.png" :class="{ active: race == 3 && female }" @click="onRaceClick(3, true)" v-if="race == 0 || (race == 3 && female)" />
      <img src="raceicons/trollf.png" :class="{ active: race == 4 && female }" @click="onRaceClick(4, true)" v-if="race == 0 || (race == 4 && female)" />
      <img src="raceicons/bef.png" :class="{ active: race == 5 && female }" @click="onRaceClick(5, true)" v-if="race == 0 || (race == 5 && female)" />
      <Icon class="reset" v-if="race != 0" @click="onRaceReset" :path="mdiCloseThick" />
    </div>

    <div class="class" v-if="race != 0 || name != ''">
      <img src="classicons/warrior.png" :class="{ active: clazz == 1 }" @click="onClassClick(1)" v-if="[1, 2, 3, 4].includes(race) && (clazz == 0 || clazz == 1)" />
      <img src="classicons/paladin.png" :class="{ active: clazz == 2 }" @click="onClassClick(2)" v-if="[5].includes(race) && (clazz == 0 || clazz == 2)" />
      <img src="classicons/hunter.png" :class="{ active: clazz == 3 }" @click="onClassClick(3)" v-if="[1, 3, 4, 5].includes(race) && (clazz == 0 || clazz == 3)" />
      <img src="classicons/rogue.png" :class="{ active: clazz == 4 }" @click="onClassClick(4)" v-if="[1, 2, 4, 5].includes(race) && (clazz == 0 || clazz == 4)" />
      <img src="classicons/priest.png" :class="{ active: clazz == 5 }" @click="onClassClick(5)" v-if="[2, 4, 5].includes(race) && (clazz == 0 || clazz == 5)" />
      <img src="classicons/shaman.png" :class="{ active: clazz == 6 }" @click="onClassClick(6)" v-if="[1, 3, 4].includes(race) && (clazz == 0 || clazz == 6)" />
      <img src="classicons/mage.png" :class="{ active: clazz == 7 }" @click="onClassClick(7)" v-if="[2, 4, 5].includes(race) && (clazz == 0 || clazz == 7)" />
      <img src="classicons/warlock.png" :class="{ active: clazz == 8 }" @click="onClassClick(8)" v-if="[1, 2, 5].includes(race) && (clazz == 0 || clazz == 8)" />
      <img src="classicons/druid.png" :class="{ active: clazz == 9 }" @click="onClassClick(9)" v-if="[3].includes(race) && (clazz == 0 || clazz == 9)" />
      <Icon class="reset" v-if="clazz != 0" @click="onClassReset" :path="mdiCloseThick" />
    </div>

    <div class="class" v-if="clazz != 0">
      <img :src="speccinfo[1].picture" :class="{ active: specc == 1 }" @click="onSpeccClick(1)" v-if="speccinfo[1] && (specc == 0 || specc == 1)" />
      <img :src="speccinfo[2].picture" :class="{ active: specc == 2 }" @click="onSpeccClick(2)" v-if="speccinfo[2] && (specc == 0 || specc == 2)" />
      <img :src="speccinfo[3].picture" :class="{ active: specc == 3 }" @click="onSpeccClick(3)" v-if="speccinfo[3] && (specc == 0 || specc == 3)" />
      <img :src="speccinfo[4].picture" :class="{ active: specc == 4 }" @click="onSpeccClick(4)" v-if="speccinfo[4] && (specc == 0 || specc == 4)" />
      <Icon class="reset" v-if="specc != 0" @click="onSpeccReset" :path="mdiCloseThick" />
    </div>

    <!-- <div class="icons">
      <img class="icon" :src="char.female ? race.picture.female : race.picture.male" />
      <img class="icon" :src="clazz.picture" />
      <img class="icon" :src="clazz.speccs[char.specc].picture" />
    </div>
    <div class="text">
      <h3 :style="`color:${clazz.color}`">{{ char.name }}</h3>
      <div>{{ race.name }}</div>
      <div>{{ clazz.name }}</div>
      <div>{{ clazz.speccs[char.specc].name }}</div>
    </div> -->
    <div class="controls"><button class="save">Speichern</button></div>
  </div>
</template>

<script lang="ts">
import { mdiCloseThick } from '@mdi/js';
import { defineComponent, computed, ref, toRefs } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    character: {
      type: Object as () => Char,
      required: true,
      default: () => {
        return {
          id: 0,
          name: '',
          race: 0,
          specc: 0,
          class: 0,
          female: true,
          account: 1,
        };
      },
    },
  },
  setup(props) {
    const race = ref(props.character.race);
    const name = ref(props.character.name);
    const specc = ref(props.character.specc);
    const clazz = ref(props.character.class);
    const female = ref(props.character.female);
    const store = useStore();

    const onRaceClick = (raceid: number, femaleid: boolean) => {
      race.value = raceid;
      female.value = femaleid;
      clazz.value = 0;
      specc.value = 0;
    };
    const onSpeccClick = (speccid: number) => {
      specc.value = speccid;
    };
    const onSpeccReset = () => {
      specc.value = 0;
    };
    const onClassClick = (classid: number) => {
      clazz.value = classid;
    };
    const onRaceReset = () => {
      race.value = 0;
      clazz.value = 0;
      specc.value = 0;
    };
    const onClassReset = () => {
      clazz.value = 0;
      specc.value = 0;
    };
    const speccinfo = computed(() => (clazz.value != 0 ? store.getters.getClassById(clazz.value).speccs : {}));
    return {
      mdiCloseThick,
      onSpeccReset,
      onClassReset,
      onRaceReset,
      onSpeccClick,
      onClassClick,
      onRaceClick,
      race,
      name,
      specc,
      clazz,
      speccinfo,
      female,
    };
  },
});
</script>
