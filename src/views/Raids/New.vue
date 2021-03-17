<style lang="scss">
#newraid {
  .description {
    height: 100px;
  }

  .invites {
    line-height: 0;
    @media (max-width: $sm) {
      text-align: center;
    }
    align-content: flex-start;
    .shortchar {
      margin-right: 5px;
      margin-bottom: 5px;
      display: inline-block;
      cursor: pointer;
      &.active {
        background-color: $c-dark-green;
      }
    }

    h3 {
      margin-top: 25px;
    }
  }
  .invites-header {
    .form-element {
      margin-top: 0 !important;
    }
  }

  .groups {
    @media (max-width: $sm) {
      text-align: center;
    }
    button {
      margin-right: 5px;
    }
  }
}
</style>

<template>
  <div id="newraid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="row">
            <div class="form-element col-12">
              <label for="raid_name" :class="{ hasvalue: raid.name != '' }">Raidname</label>
              <input class="form-control" type="text" id="raid_name" v-model="raid.name" placeholder="Raidname" />
            </div>
          </div>

          <div class="row">
            <div class="form-element col-lg-6 col-12">
              <label for="raid_date" :class="{ hasvalue: raid.date != '' }">Datum</label>
              <input class="form-control" id="raid_date" type="text" v-model="raid.date" placeholder="Datum" />
            </div>
            <div class="form-element col-lg-6 col-12">
              <label for="raid_size" :class="{ hasvalue: raid.size != 0 }">Größe</label>
              <input class="form-control" id="raid_size" type="number" v-model="raid.size" placeholder="Größe" />
            </div>
          </div>
        </div>

        <div class="form-element col-lg-6 col-12">
          Icon:<br />
          <IconSelect v-model="raid.picture" />
        </div>
        <div class="form-element col-12">
          <label for="raid_desc" :class="{ hasvalue: raid.description != '' }">Beschreibung</label>
          <textarea class="form-control description" id="raid_desc" v-model="raid.description" placeholder="Beschreibung" />
        </div>
      </div>
      <div class="row align-items-center invites-header">
        <div class="col-6">
          <h2 class="subheadline">Einladungen</h2>
        </div>

        <div class="form-element col-6">
          <label for="raid_filter" :class="{ hasvalue: filter != '' }">Filter</label>
          <input class="form-control" id="raid_filter" type="text" v-model="filter" placeholder="Filter" />
        </div>
      </div>

      <div class="row groups">
        <div class="col-12">
          Gruppe einladen:
        </div>
        <div class="col-12">
          <button :key="group.id" v-for="group in groups" @click="groupClicked(group.id)">{{ group.name }}</button>
        </div>
      </div>

      <div class="row invites">
        <div class="col-12">
          <h3>Tanks</h3>
        </div>
        <div class="col-12">
          <ShortChar :class="{ active: invited.includes(char.id) }" :character="char" :key="char.id" v-for="char in tanks" @click="toggleInvite(char.id)" />
        </div>
        <div class="col-12">
          <h3>Melee DPS</h3>
        </div>
        <div class="col-12">
          <ShortChar :class="{ active: invited.includes(char.id) }" :character="char" :key="char.id" v-for="char in melees" @click="toggleInvite(char.id)" />
        </div>
        <div class="col-12">
          <h3>Ranged DPS</h3>
        </div>
        <div class="col-12">
          <ShortChar :class="{ active: invited.includes(char.id) }" :character="char" :key="char.id" v-for="char in ranged" @click="toggleInvite(char.id)" />
        </div>
        <div class="col-12">
          <h3>Heals</h3>
        </div>
        <div class="col-12">
          <ShortChar :class="{ active: invited.includes(char.id) }" :character="char" :key="char.id" v-for="char in heals" @click="toggleInvite(char.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SidebarItemVue from '@/components/SidebarItem.vue';
import { defineComponent, inject, ref, computed } from 'vue';
import { useStore } from 'vuex';

import IconSelect from '../../components/IconSelect.vue';

export default defineComponent({
  components: {
    IconSelect,
  },
  setup() {
    const raid = ref<RaidEvent>({ id: 0, name: '', picture: '', date: '', description: '', size: 5 });
    const store = useStore();
    const filter = ref('');
    const invited = ref<Array<number>>([]);

    const chars = computed(() =>
      store.state.members.members
        .filter((char: Char) => {
          const clazz = store.getters.getClassById(char.class);
          return char.name.includes(filter.value) || clazz.name.includes(filter.value);
        })
        .sort((a: Char, b: Char) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        })
    );

    const tanks = computed(() => chars.value.filter((item: Char) => store.getters.getClassById(item.class).speccs[item.specc].role == 'tank'));
    const melees = computed(() => chars.value.filter((item: Char) => store.getters.getClassById(item.class).speccs[item.specc].role == 'melee'));
    const heals = computed(() => chars.value.filter((item: Char) => store.getters.getClassById(item.class).speccs[item.specc].role == 'heal'));
    const ranged = computed(() => chars.value.filter((item: Char) => store.getters.getClassById(item.class).speccs[item.specc].role == 'ranged'));

    const toggleInvite = (id: number) => {
      const index = invited.value.indexOf(id);
      if (index > -1) {
        invited.value.splice(index, 1);
      } else {
        invited.value.push(id);
      }
    };

    const groups = computed(() => store.state.events.groups);
    const groupClicked = (id: number) => {
      const group = groups.value.find((group: any) => group.id == id);
      group.members.forEach((member: number) => {
        const index = invited.value.indexOf(member);
        console.log(member, index);
        if (index <= -1) {
          invited.value.push(member);
        }
      });
    };

    (inject('setHeadline') as Function)('Neuer Raid');

    return {
      groups,
      groupClicked,
      tanks,
      melees,
      heals,
      ranged,
      raid,
      chars,
      filter,
      invited,
      toggleInvite,
    };
  },
});
</script>
