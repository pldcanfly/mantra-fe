const account = {
  state: {
    chars: [1, 2],
    username: 'pldcanfly',
    id: 1,
    loggedinfake: true,
  },
  getters: {
    isLoggedIn(context: any) {
      return context.loggedinfake;
    },
    accountInfo(context: any) {
      return context;
    },
  },
  mutations: {},
  actions: {
    login(state: any, payload: { username: string; password: string }) {
      console.log('loggedin');
    },
  },
};

export default account;
