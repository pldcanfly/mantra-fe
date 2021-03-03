<style lang="scss" scoped>
.newcharform {
  background-color: $c-medium-grey;

  width: 100%;
  max-width: 200px;
  height: 100%;
  min-height: 50px;
  padding-bottom: 15px;

  input {
    width: 100%;
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

  //   .class {
  //     img {
  //         width: 25%;
  //     }
  //   }

  .controls {
    margin-top: 25px;
    font-size: 15px;
    text-align: center;
  }
}
</style>

<template>
  <div class="newcharform">
    <input class="form-control" placeholder="Name" id="newchar_name" type="text" />

    <div class="race">
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

    <div class="class" v-if="race != 0">
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
      <img :src="spec.picture" :class="{ active: specc == index }" @click="onSpeccClick(index)" :key="spec.name" v-for="(spec,index) in speccinfo" />
      <Icon class="reset" v-if="specc != 0" @click="onClassReset" :path="mdiCloseThick" />
    </div>
    {{ speccinfo}}
  

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
    <div class="controls"><a href="#">Speichern</a></div>
  </div>
</template>

<script lang="ts">
import { mdiCloseThick } from '@mdi/js';
import { defineComponent, computed, ref,Ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup(props) {
    const race = ref(0);
    const name = ref('');
    const specc = ref(0);
    const clazz = ref(0);
    const female = ref(true);
    const store = useStore();
    // const char = ref(props.character);

    // const clazz = computed(() => store.getters['getClassById'](char.value.class));
    // const race = computed(() => store.getters['getRaceById'](char.value.race));

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

    const speccinfo = computed(() => {
        if(clazz.value != 0){
        const speccs = store.getters.getClassById(clazz.value).speccs;
            return speccs;
        }
        return {};
    // if(clazz.value != 0){
    //     
    //     if(specc.value != 0){
    //         console.log(speccs);
    //         // @ts-ignore
    //         return {}[specc.value]= speccs[specc.value];
    //     } else {
            
    //     }
        
    // }
    // return {};      
    });

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
