import { createStore } from 'vuex';
<<<<<<< HEAD
import { raceTable, classTable } from './tables';
=======

type RaceTable = {
  [propName: number]: RaceItem;
};

type RaceItem = {
  name: string;
  picture: RaceItemPicture;
};

type RaceItemPicture = {
  male: string;
  female: string;
};

const raceTable: RaceTable = {
  1: {
    name: 'Orc',
    picture: {
      male: 'raceicons/orcm.png',
      female: 'raceicons/orcf.png',
    },
  },
  2: {
    name: 'Undead',
    picture: {
      male: 'raceicons/undeadm.png',
      female: 'raceicons/undeadf.png',
    },
  },
  3: {
    name: 'Tauren',
    picture: {
      male: 'raceicons/taurenm.png',
      female: 'raceicons/taurenf.png',
    },
  },
  4: {
    name: 'Troll',
    picture: {
      male: 'raceicons/trollm.png',
      female: 'raceicons/trollf.png',
    },
  },
  5: {
    name: 'Blood Elf',
    picture: {
      male: 'raceicons/bem.png',
      female: 'raceicons/bef.png',
    },
  },
};

type ClassTable = {
  [propName: number]: ClassItem;
};

type ClassItem = {
  name: string;
  picture: string;
  speccs: SpeccTable;
};

type SpeccTable = {
  1: SpeccItem;
  2: SpeccItem;
  3: SpeccItem;
  4?: SpeccItem;
};

type SpeccItem = {
  name: string;
  role: 'damage' | 'heal' | 'tank';
  picture: string;
};

const classTable: ClassTable = {
  1: {
    name: 'Warrior',
    picture: 'classicons/warrior.png',
    speccs: {
      1: { name: 'Arms', role: 'damage', picture: 'warms.png' },
      2: { name: 'Fury', role: 'damage', picture: 'wfury.png' },
      3: { name: 'Protection', role: 'tank', picture: 'wprot.png' },
    },
  },
  2: {
    name: 'Paladin',
    picture: 'classicons/paladin.png',
    speccs: {
      1: { name: 'Holy', role: 'heal', picture: 'pholy.png' },
      2: { name: 'Protection', role: 'tank', picture: 'pprot.png' },
      3: { name: 'Retribution', role: 'damage', picture: 'pretri.png' },
    },
  },
  3: {
    name: 'Hunter',
    picture: 'classicons/hunter.png',
    speccs: {
      1: { name: 'Beast Mastery', role: 'damage', picture: 'hbm.png' },
      2: { name: 'Marksmanship', role: 'damage', picture: 'hmarks.png' },
      3: { name: 'Survival', role: 'damage', picture: 'hsurv.png' },
    },
  },
  4: {
    name: 'Rogue',
    picture: 'classicons/rogue.png',
    speccs: {
      1: { name: 'Assassination', role: 'damage', picture: 'rassass.png' },
      2: { name: 'Combat', role: 'damage', picture: 'rcombat.png' },
      3: { name: 'Subtlety', role: 'damage', picture: 'rsub.png' },
    },
  },
  5: {
    name: 'Priest',
    picture: 'classicons/priest.png',
    speccs: {
      1: { name: 'Discipline', role: 'heal', picture: 'prdisc.png' },
      2: { name: 'Holy', role: 'heal', picture: 'prholy.png' },
      3: { name: 'Shadow', role: 'damage', picture: 'prsdhadow.png' },
    },
  },
  6: {
    name: 'Shaman',
    picture: 'classicons/shaman.png',
    speccs: {
      1: { name: 'Elemental', role: 'damage', picture: 'sele.png' },
      2: { name: 'Enhancment', role: 'damage', picture: 'sench.png' },
      3: { name: 'Restoration', role: 'heal', picture: 'sresto.png' },
    },
  },
  7: {
    name: 'Mage',
    picture: 'classicons/mage.png',
    speccs: {
      1: { name: 'Arcane', role: 'damage', picture: 'marcane.png' },
      2: { name: 'Fire', role: 'damage', picture: 'mfire.png' },
      3: { name: 'Frost', role: 'tank', picture: 'mfrost.png' },
    },
  },
  8: {
    name: 'Warlock',
    picture: 'classicons/warlock.png',
    speccs: {
      1: { name: 'Affliction', role: 'damage', picture: 'waffli.png' },
      2: { name: 'Demonology', role: 'damage', picture: 'wdemo.png' },
      3: { name: 'Destrution', role: 'tank', picture: 'wdestro.png' },
    },
  },
  9: {
    name: 'Druid',
    picture: 'classicons/druid.png',
    speccs: {
      1: { name: 'Balance', role: 'damage', picture: 'dowl.png' },
      2: { name: 'Feral (Cat)', role: 'damage', picture: 'dferal.png' },
      3: { name: 'Restoration', role: 'heal', picture: 'dresto.png' },
      4: { name: 'Feral (Tank)', role: 'damage', picture: 'dferal.png' },
    },
  },
};
>>>>>>> d4a5946d6e9d43aefdd99c679d16fea4e766993f

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
      { id: 2, name: 'Honra', rank: 'Epic', class: 6, race: 3, female: false, specc: 2, twink: 1 },
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
