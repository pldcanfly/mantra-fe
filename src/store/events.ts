const events = {
  state: {
    events: [
      { id: 1, name: 'Sunwell', picture: 'icons/kj.png', date: '17.04.2020 19:00' },
      { id: 2, name: 'Naxxramas', picture: 'icons/naxx.png', date: '17.04.2020 19:00' },
      { id: 3, name: 'Viewpartey', picture: 'icons/kara.png', date: '17.04.2020 19:00' },
      { id: 4, name: 'Epixxe looten', picture: 'icons/illidan.png', date: '17.04.2020 19:00' },
    ],
    groups: [{ id: 1, name: 'Socials' }],
  },
  getters: {
    getEvents(context: any) {
      return context.events;
    },
    getEventById(context: any) {
      return (id: number) => context.events.find((item: any) => item.id == id);
    },
  },
  mutations: {},
  actions: {},
};

export default events;
