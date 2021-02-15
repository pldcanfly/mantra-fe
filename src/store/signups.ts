const signups = {
  state: {
    signups: [{ raidid: 1, signed: [1, 2, 3, 4, 5], rejected: [6, 7] }, { raidid: 2 }, { raidid: 3 }, { raidid: 4 }],
  },
  getters: {
    getSignups(context: any) {
      return (id: number) => context.signups.find((item: any) => item.raidid == id);
    },
  },
  mutations: {},
  actions: {},
};

export default signups;
