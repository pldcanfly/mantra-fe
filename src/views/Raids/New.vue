<style lang="scss">
#newraid {
  .description {
    height: 100px;
  }

  .invites {
    .shortchar {
      margin-right: 3px;
      display: inline-block;
      &.active {
        background-color: $c-dark-green;
      }
    }
  }
  .invites-header {
    .form-element {
      margin-top: 0 !important;
    }
  }
}
</style>

<template>
  <div id="newraid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="form-element col-12">
              <label for="raid_name" :class="{ hasvalue: raid.name != '' }">Raidname</label>
              <input class="form-control" type="text" id="raid_name" v-model="raid.name" placeholder="Raidname" />
            </div>
          </div>

          <div class="row">
            <div class="form-element col-6">
              <label for="raid_date" :class="{ hasvalue: raid.date != '' }">Datum</label>
              <input class="form-control" id="raid_date" type="text" v-model="raid.date" placeholder="Datum" />
            </div>
            <div class="form-element col-6">
              <label for="raid_size" :class="{ hasvalue: raid.size != 0 }">Größe</label>
              <input class="form-control" id="raid_size" type="number" v-model="raid.size" placeholder="Größe" />
            </div>
          </div>
        </div>

        <div class="form-element col-6">
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

      <div class="row invites">
        <div class="col-12">
          <ShortChar :class="{ active: invited.includes(char.id) }" :character="char" :key="char.id" v-for="char in chars" @click="toggleInvite(char.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
      store.state.members.members.filter((char: Char) => {
        const clazz = store.getters.getClassById(char.class);
        return char.name.includes(filter.value) || clazz.name.includes(filter.value);
      })
    );

    const toggleInvite = (id: number) => {
      const index = invited.value.indexOf(id);
      if (index > -1) {
        invited.value.splice(index, 1);
      } else {
        invited.value.push(id);
      }
    };

    (inject('setHeadline') as Function)('Neuer Raid');

    return {
      raid,
      chars,
      filter,
      invited,
      toggleInvite,
    };
  },
});
</script>
