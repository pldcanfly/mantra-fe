import { createStore } from 'vuex';

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
      male: 'orcm.jpg',
      female: 'orcf.jpg',
    },
  },
  2: {
    name: 'Undead',
    picture: {
      male: 'undeadm.jpg',
      female: 'undeadf.jpg',
    },
  },
  3: {
    name: 'Tauren',
    picture: {
      male: 'taurenm.jpg',
      female: 'taurenf.jpg',
    },
  },
  4: {
    name: 'Troll',
    picture: {
      male: 'trollm.jpg',
      female: 'trollf.jpg',
    },
  },
  5: {
    name: 'Blood Elf',
    picture: {
      male: 'bem.jpg',
      female: 'bef.jpg',
    },
  },
};

type ClassTable = {
  [propName: number]: ClassItem;
};

type ClassItem = {
  name: string;
  icon: string;
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
    icon: 'warrior.jpg',
    speccs: {
      1: { name: 'Arms', role: 'damage', picture: 'warms.jpg' },
      2: { name: 'Fury', role: 'damage', picture: 'wfury.jpg' },
      3: { name: 'Protection', role: 'tank', picture: 'wprot.jpg' },
    },
  },
  2: {
    name: 'Paladin',
    icon: 'paladin.jpg',
    speccs: {
      1: { name: 'Holy', role: 'heal', picture: 'pholy.jpg' },
      2: { name: 'Protection', role: 'tank', picture: 'pprot.jpg' },
      3: { name: 'Retribution', role: 'damage', picture: 'pretri.jpg' },
    },
  },
  3: {
    name: 'Hunter',
    icon: 'hunter.jpg',
    speccs: {
      1: { name: 'Beast Mastery', role: 'damage', picture: 'hbm.jpg' },
      2: { name: 'Marksmanship', role: 'damage', picture: 'hmarks.jpg' },
      3: { name: 'Survival', role: 'damage', picture: 'hsurv.jpg' },
    },
  },
  4: {
    name: 'Rogue',
    icon: 'rogue.jpg',
    speccs: {
      1: { name: 'Assassination', role: 'damage', picture: 'rassass.jpg' },
      2: { name: 'Combat', role: 'damage', picture: 'rcombat.jpg' },
      3: { name: 'Subtlety', role: 'damage', picture: 'rsub.jpg' },
    },
  },
  5: {
    name: 'Priest',
    icon: 'priest.jpg',
    speccs: {
      1: { name: 'Discipline', role: 'heal', picture: 'prdisc.jpg' },
      2: { name: 'Holy', role: 'heal', picture: 'prholy.jpg' },
      3: { name: 'Shadow', role: 'damage', picture: 'prsdhadow.jpg' },
    },
  },
  6: {
    name: 'Shaman',
    icon: 'shaman.jpg',
    speccs: {
      1: { name: 'Elemental', role: 'damage', picture: 'sele.jpg' },
      2: { name: 'Enhancment', role: 'damage', picture: 'sench.jpg' },
      3: { name: 'Restoration', role: 'heal', picture: 'sresto.jpg' },
    },
  },
  7: {
    name: 'Mage',
    icon: 'mage.jpg',
    speccs: {
      1: { name: 'Arcane', role: 'damage', picture: 'marcane.jpg' },
      2: { name: 'Fire', role: 'damage', picture: 'mfire.jpg' },
      3: { name: 'Frost', role: 'tank', picture: 'mfrost.jpg' },
    },
  },
  8: {
    name: 'Warlock',
    icon: 'warlock.jpg',
    speccs: {
      1: { name: 'Affliction', role: 'damage', picture: 'waffli.jpg' },
      2: { name: 'Demonology', role: 'damage', picture: 'wdemo.jpg' },
      3: { name: 'Destrution', role: 'tank', picture: 'wdestro.jpg' },
    },
  },
  9: {
    name: 'Druid',
    icon: 'druid.jpg',
    speccs: {
      1: { name: 'Balance', role: 'damage', picture: 'dowl.jpg' },
      2: { name: 'Feral (Cat)', role: 'damage', picture: 'dferal.jpg' },
      3: { name: 'Restoration', role: 'heal', picture: 'dresto.jpg' },
      4: { name: 'Feral (Tank)', role: 'damage', picture: 'dferal.jpg' },
    },
  },
};

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
