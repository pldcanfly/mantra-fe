const members = {
  state: {
    members: [
      { id: 1, name: 'Kessedy', rank: 'Epic', class: 2, race: 5, female: true, specc: 3 },
      { id: 2, name: 'Honra', rank: 'Epic', class: 6, race: 3, female: false, specc: 2, twink: 1 },
      { id: 3, name: 'Harri', rank: 'Epic', class: 9, race: 3, female: false, specc: 4 },
      { id: 4, name: 'Zappotage', rank: 'Epic', class: 8, race: 2, female: false, specc: 3 },
      { id: 5, name: 'Tuuki', rank: 'Epic', class: 3, race: 4, female: false, specc: 1 },
      { id: 6, name: 'Julez', rank: 'Epic', class: 1, race: 1, female: true, specc: 3 },
      { id: 7, name: 'Dortmunder', rank: 'Epic', class: 7, race: 4, female: true, specc: 1 },
      { id: 8, name: 'Painkilla', rank: 'Epic', class: 2, race: 5, female: false, specc: 2 },
      { id: 9, name: 'Gruenlicht', rank: 'Epic', class: 5, race: 4, female: true, specc: 2 },
      { id: 10, name: 'Mabea', rank: 'Epic', class: 6, race: 4, female: true, specc: 3 },
      { id: 11, name: 'Valder', rank: 'Epic', class: 4, race: 2, female: false, specc: 2 },
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
  },
  mutations: {},
  actions: {},
};

export default members;
