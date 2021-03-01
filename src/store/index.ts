import { createStore } from 'vuex';
import { raceTable, classTable } from './tables';
import members from './members';
import events from './events';
import signups from './signups';
import account from './account';
import { set } from './_util';

export default createStore({
  modules: {
    account,
    members,
    events,
    signups,
  },
  state: {
    pickedup: -1,
    raceTable,
    classTable,
  },
  mutations: {
    pickedup: set('pickedup'),
  },
  actions: {
    pickupChar(context: any, id: number) {
      context.commit('pickedup', id);
    },
    clearPickup(context: any) {
      context.commit('pickedup', -1);
    },
  },

  getters: {
    getClassById(context) {
      return (id: number) => context.classTable[id];
    },
    getRaceById(context) {
      return (id: number) => context.raceTable[id];
    },
  },
});
