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

const classTable: ClassTable = {
  1: {
    name: 'Warrior',
    color: '#C69B6D',
    picture: 'classicons/warrior.png',
    speccs: {
      1: { name: 'Arms', role: 'damage', picture: 'speccicons/warms.png' },
      2: { name: 'Fury', role: 'damage', picture: 'speccicons/wfury.png' },
      3: { name: 'Protection', role: 'tank', picture: 'speccicons/wprot.png' },
    },
  },
  2: {
    name: 'Paladin',
    color: '#F48CBA',
    picture: 'classicons/paladin.png',
    speccs: {
      1: { name: 'Holy', role: 'heal', picture: 'speccicons/pholy.png' },
      2: { name: 'Protection', role: 'tank', picture: 'speccicons/pprot.png' },
      3: { name: 'Retribution', role: 'damage', picture: 'speccicons/pretri.png' },
    },
  },
  3: {
    name: 'Hunter',
    color: '#AAD372',
    picture: 'classicons/hunter.png',
    speccs: {
      1: { name: 'Beast Mastery', role: 'damage', picture: 'speccicons/hbm.png' },
      2: { name: 'Marksmanship', role: 'damage', picture: 'speccicons/hmm.png' },
      3: { name: 'Survival', role: 'damage', picture: 'speccicons/hsv.png' },
    },
  },
  4: {
    name: 'Rogue',
    color: '#FFF468',
    picture: 'classicons/rogue.png',
    speccs: {
      1: { name: 'Assassination', role: 'damage', picture: 'speccicons/rassa.png' },
      2: { name: 'Combat', role: 'damage', picture: 'speccicons/rcombat.png' },
      3: { name: 'Subtlety', role: 'damage', picture: 'speccicons/rsub.png' },
    },
  },
  5: {
    name: 'Priest',
    color: '#FFFFFF',
    picture: 'classicons/priest.png',
    speccs: {
      1: { name: 'Discipline', role: 'heal', picture: 'speccicons/prdisc.png' },
      2: { name: 'Holy', role: 'heal', picture: 'speccicons/pholy.png' },
      3: { name: 'Shadow', role: 'damage', picture: 'speccicons/prsdhadow.png' },
    },
  },
  6: {
    name: 'Shaman',
    color: '#0070DD',
    picture: 'classicons/shaman.png',
    speccs: {
      1: { name: 'Elemental', role: 'damage', picture: 'speccicons/sele.png' },
      2: { name: 'Enhancment', role: 'damage', picture: 'speccicons/sench.png' },
      3: { name: 'Restoration', role: 'heal', picture: 'speccicons/sresto.png' },
    },
  },
  7: {
    name: 'Mage',
    color: '#3FC7EB',
    picture: 'classicons/mage.png',
    speccs: {
      1: { name: 'Arcane', role: 'damage', picture: 'speccicons/marcane.png' },
      2: { name: 'Fire', role: 'damage', picture: 'speccicons/mfire.png' },
      3: { name: 'Frost', role: 'tank', picture: 'speccicons/mfrost.png' },
    },
  },
  8: {
    name: 'Warlock',
    color: '#8788EE',
    picture: 'classicons/warlock.png',
    speccs: {
      1: { name: 'Affliction', role: 'damage', picture: 'speccicons/waffli.png' },
      2: { name: 'Demonology', role: 'damage', picture: 'speccicons/wdemo.png' },
      3: { name: 'Destrution', role: 'tank', picture: 'speccicons/wdestro.png' },
    },
  },
  9: {
    name: 'Druid',
    color: '#FF7C0A',
    picture: 'classicons/druid.png',
    speccs: {
      1: { name: 'Balance', role: 'damage', picture: 'speccicons/dbalance.png' },
      2: { name: 'Feral (Cat)', role: 'damage', picture: 'speccicons/dferal.png' },
      3: { name: 'Restoration', role: 'heal', picture: 'speccicons/dresto.png' },
      4: { name: 'Feral (Tank)', role: 'damage', picture: 'speccicons/dbear.png' },
    },
  },
};

export { raceTable, classTable };
