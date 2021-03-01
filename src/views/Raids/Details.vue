<style lang="scss">
#raiddetails {
  .selectable {
    .shortchar:hover {
      background-color: $c-light-grey;
      box-shadow: none;
    }
  }
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
    transition: all $transition-length;
    margin-bottom: 2px;
  }
}
.shortchar.clicked {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>

<template>
  <div id="raiddetails" class="container-fluid">
    <div class="row">
      <div class="intro col-12">
        <div class="picture">
          <img :src="raid.picture" />
        </div>
        <div class="text">
          <div class="text-content">
            {{ raid.description }}
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <ShortCharSelect :characters="mychars" v-model="selected" />

      <button @click="signupClick">Anmelden</button>
      <!-- <button @click="click2">Abmelden</button> -->
    </div>
    <!-- <div class="row">
      {{ signups }}
    </div> -->
    <div class="row selectable">
      <div class="col-md-12 col-lg-2">
        Angemeldet:
        <ShortChar v-for="char in signed" :key="char.id" :character="char" @click="pickup(char.id)" />
        <DropSpot @click="drop('signed')" v-if="pickedup != -1">Hinzufügen</DropSpot>
      </div>
      <div class="col-md-12 col-lg-2">
        Abgemeldet:
        <ShortChar v-for="char in rejected" :key="char.id" :character="char" @click="pickup(char.id)" />
        <DropSpot @click="drop('rejected')" v-if="pickedup != -1">Hinzufügen</DropSpot>
      </div>
      <div class="col-md-12 col-lg-2">
        Ersatzbank:
        <ShortChar v-for="char in benched" :key="char.id" :character="char" @click="pickup(char.id)" />
        <DropSpot @click="drop('benched')" v-if="pickedup != -1">Hinzufügen</DropSpot>
      </div>
      <div class="col-md-12 col-lg-4">
        <div class="row">
          <div class="col-6" :key="groupnumber" v-for="groupnumber in Math.ceil(raid.size / 5)">
            Gruppe {{ groupnumber }}

            <div class="spot" :key="spotnumber" v-for="(spot, spotnumber) in groups.slice(5 * (groupnumber - 1), 5 * (groupnumber - 1) + 5)">
              <DropSpot v-if="spot.free || pickedup == spot.value.id" @click="drop((groupnumber - 1) * 5 + spotnumber + 1)">Frei</DropSpot>
              <ShortChar v-if="!spot.free && pickedup != spot.value.id" :character="spot.value" :key="spot.value.id" @click="pickuporreplace(spot.value.id, (groupnumber - 1) * 5 + spotnumber + 1)" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <teleport to="body">
      <ShortChar v-if="pickedup != -1" :key="pickedupchar.id" :character="pickedupchar" :class="{ clicked: pickedup != -1 }" :style="pickedup != -1 ? `transform: translate(${pickedupposition.x + 10}px, ${pickedupposition.y + 10}px` : ''" />
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import ShortCharSelect from '../../components/ShortCharSelect.vue';
import DropSpot from '../../components/DropSpot.vue';

export default defineComponent({
  components: {
    DropSpot,
    ShortCharSelect,
  },
  setup() {
    const pickedupposition = ref({ x: 0, y: 0 });

    window.addEventListener('mousemove', (e) => {
      pickedupposition.value.x = e.clientX;
      pickedupposition.value.y = e.clientY;
    });

    const router = useRouter();
    const store = useStore();
    const raidid = computed(() => router.currentRoute.value.params.id);

    const raid = computed(() => store.getters.getEventById(raidid.value));

    const pickedupchar = computed(() => store.getters.getChar(store.state.pickedup));
    const pickedup = computed(() => store.state.pickedup);

    const signed = computed(() =>
      store.getters
        .getActors(raid.value.id, 'signed')
        .filter((actor: RaidSignupActor) => actor.id != pickedup.value)
        .map((actor: RaidSignupActor) => store.getters.getChar(actor.id))
    );
    const rejected = computed(() =>
      store.getters
        .getActors(raid.value.id, 'rejected')
        .filter((actor: RaidSignupActor) => actor.id != pickedup.value)
        .map((actor: RaidSignupActor) => store.getters.getChar(actor.id))
    );
    const benched = computed(() =>
      store.getters
        .getActors(raid.value.id, 'benched')
        .filter((actor: RaidSignupActor) => actor.id != pickedup.value)
        .map((actor: RaidSignupActor) => store.getters.getChar(actor.id))
    );

    const groups = computed(() => {
      const groups: Array<RaidSpot> = [];
      for (let i = 1; i <= raid.value.size; i++) {
        const actor = store.getters.getActor(raid.value.id, i);

        if (actor) {
          groups.push({ free: false, value: store.getters.getChar(actor.id) });
        } else {
          groups.push({ free: true, value: `Frei ${i}` });
        }
      }

      return groups;
    });

    const pickup = (id: number) => store.dispatch('pickupChar', id);
    const pickuporreplace = (id: number, position: number) => {
      if (pickedup.value != -1) {
        store.dispatch('setPosition', { raidid: raid.value.id, actorid: store.state.pickedup, position });
        store.dispatch('clearPickup');
      }

      store.dispatch('pickupChar', id);
    };
    const drop = (position: RaidPosition) => {
      if (pickedup.value != -1) {
        store.dispatch('setPosition', { raidid: raid.value.id, actorid: store.state.pickedup, position });
        store.dispatch('clearPickup');
      }
    };

    const selected = ref(1);
    const mychars = computed(() => {
      console.log(store.getters.getActors(raid.value.id, 'invited'), store.state.account.chars);
      return store.state.account.chars
        .filter((id: number) => {
          return store.getters.getActors(raid.value.id, 'invited').find((actor: RaidSignupActor) => actor.id == id) !== undefined;
        })
        .map((id: number) => store.getters.getChar(id));
    });
    const signupClick = () => store.dispatch('setPosition', { raidid: raid.value.id, actorid: selected.value, position: 'signed' });

    (inject('setHeadline') as Function)(`${raid.value.name}`);

    return {
      raid,
      signed,
      rejected,
      benched,
      groups,
      signupClick,
      pickup,
      drop,
      pickedup,
      pickuporreplace,
      pickedupchar,
      pickedupposition,
      mychars,
      selected,
    };
  },
});
</script>
