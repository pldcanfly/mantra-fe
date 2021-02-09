import { createStore } from 'vuex';
import { raceTable, classTable } from './tables';

export default createStore({
  state: {
    raceTable,
    classTable,
    events: [
      { id: 1, name: "Zul'Gurub", picture: '1', date: '17.04.2020 19:00' },
      { id: 2, name: 'Naxxramas', picture: '1', date: '17.04.2020 19:00' },
      { id: 3, name: 'Viewpartey', picture: '1', date: '17.04.2020 19:00' },
      { id: 4, name: 'Epixxe looten', picture: '1', date: '17.04.2020 19:00' },
    ],
    members: [
      { id: 1, name: 'Kessedy', rank: 'Epic', class: 2, race: 5, female: true, specc: 3 },
      { id: 2, name: 'Honra', rank: 'Epic', class: 6, race: 1, female: false, specc: 2, twink: 1 },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getEvents(context) {
      return context.events;
    },
    getMains(context) {
      return context.members.filter((item) => item.twink == undefined);
    },
    getTwinks(context) {
      return (id: number) => context.members.filter((item) => item.twink == id);
    },
    getClassById(context) {
      return (id: number) => context.classTable[id];
    },
    getRaceById(context) {
      return (id: number) => context.raceTable[id];
    },
  },
});
