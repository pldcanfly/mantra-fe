const members = {
  state: {
    members: [
      { id: 1, name: 'Kessedy', rank: 'Epic', class: 2, race: 5, female: true, specc: 2, account: 1 },
      { id: 2, name: 'Honra', rank: 'Epic', class: 6, race: 3, female: false, specc: 2, account: 1 },
      { id: 3, name: 'Harri', rank: 'Epic', class: 9, race: 3, female: true, specc: 4, account: 1 },
      { id: 4, name: 'Zappotage', rank: 'Epic', class: 8, race: 2, female: true, specc: 3, account: 1 },
      { id: 5, name: 'Tuuki', rank: 'Epic', class: 3, race: 4, female: false, specc: 1, account: 1 },
      { id: 6, name: 'Julez', rank: 'Epic', class: 1, race: 1, female: true, specc: 3, account: 1 },
      { id: 7, name: 'Phatro', rank: 'Epic', class: 7, race: 4, female: true, specc: 1, account: 1 },
      { id: 8, name: 'Painkilla', rank: 'Epic', class: 2, race: 5, female: false, specc: 3, account: 1 },
      { id: 9, name: 'Gruenlicht', rank: 'Epic', class: 5, race: 4, female: true, specc: 2, account: 1 },
      { id: 10, name: 'Mabea', rank: 'Epic', class: 6, race: 1, female: false, specc: 3, account: 1 },
      { id: 11, name: 'Valder', rank: 'Epic', class: 4, race: 2, female: false, specc: 2, account: 1 },
      { id: 12, name: 'Nihla', rank: 'Epic', class: 9, race: 3, female: true, specc: 3, account: 1 },
      { id: 13, name: 'Grizzmo', rank: 'Epic', class: 4, race: 3, female: false, specc: 2, account: 1 },
      { id: 14, name: 'Juggernaut', rank: 'Epic', class: 1, race: 1, female: false, specc: 1, account: 1 },
      { id: 15, name: 'Tuuki', rank: 'Epic', class: 3, race: 1, female: true, specc: 1, account: 1 },
      { id: 16, name: 'Bishop', rank: 'Epic', class: 5, race: 2, female: false, specc: 3, account: 1 },
      { id: 17, name: 'Dos', rank: 'Epic', class: 8, race: 2, female: true, specc: 3, account: 1 },
      { id: 18, name: 'Kwess', rank: 'Epic', class: 7, race: 5, female: true, specc: 2, account: 1 },
      { id: 19, name: 'Piekfe', rank: 'Epic', class: 9, race: 3, female: false, specc: 1, account: 1 },
      { id: 20, name: 'Baumi', rank: 'Epic', class: 6, race: 2, female: true, specc: 1, account: 1 },
      { id: 21, name: 'Plüh', rank: 'Epic', class: 5, race: 2, female: false, specc: 3, account: 1 },
      { id: 22, name: 'Dos2', rank: 'Epic', class: 8, race: 2, female: true, specc: 1, account: 1 },
      { id: 23, name: 'Dos3', rank: 'Epic', class: 8, race: 2, female: true, specc: 2, account: 1 },
      { id: 24, name: 'Dos4', rank: 'Epic', class: 8, race: 2, female: true, specc: 3, account: 1 },
    ],
    groups: [
      { id: 1, name: 'Raid1', members: [1, 3, 4, 5, 6] },
      { id: 2, name: 'Raid2', members: [7, 8, 9, 10, 11] },
      { id: 2, name: 'Twonks', members: [2] },
    ],
  },
  getters: {
    getMains(context: any) {
      return context.members.filter((item: any) => item.twink == undefined);
    },
    getTwinks(context: any) {
      return (id: number) => context.members.filter((item: any) => item.twink == id);
    },
    getChar(context: any) {
      return (id: number) => context.members.find((item: any) => item.id == id);
    },
    getCharsForAccount(context: any, id: number) {
      return (id: number) => context.members.filter((item: any) => item.account == id);
    },
  },
  mutations: {},
  actions: {},
};

export default members;
