import { createStore } from 'vuex';
import { raceTable, classTable } from './tables';
import members from './members';
import events from './events';
import signups from './signups';

export default createStore({
  modules: {
    members,
    events,
    signups,
  },
  state: {
    raceTable,
    classTable,
  },
  mutations: {},
  actions: {},

  getters: {
    getClassById(context) {
      return (id: number) => context.classTable[id];
    },
    getRaceById(context) {
      return (id: number) => context.raceTable[id];
    },
  },
});
