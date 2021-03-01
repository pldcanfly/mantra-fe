const events = {
  state: {
    events: [
      { id: 1, name: 'Sunwell', picture: 'icons/kj.png', date: '17.04.2020 19:00', description: 'Ultra Mega Speedrun of Doom um ganz viel Zeug zu bekommen!', size: 25 },
      { id: 2, name: 'Naxxramas', picture: 'icons/naxx.png', date: '17.04.2020 19:00', description: 'Einfach mal weils Spass macht (:', size: 25 },
      { id: 3, name: 'Viewpartey', picture: 'icons/kara.png', date: '17.04.2020 19:00', description: 'Parryhaste :O', size: 25 },
      { id: 4, name: 'Epixxe looten', picture: 'icons/illidan.png', date: '17.04.2020 19:00', description: 'Warglaive Paladin inc!', size: 25 },
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
