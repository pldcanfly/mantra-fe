import { v4 as uuidv4 } from 'uuid';

const notifications = {
  state: {
    notifications: [],
  },
  actions: {
    addNotification(context: any, { type, message, lifetime }: { type: string; message: string; lifetime?: number }) {
      if (lifetime === undefined) lifetime = 2000;
      const id = uuidv4();
      context.commit('addNotification', {
        id,
        type,
        message,
      });
      setTimeout(() => context.commit('removeNotification', id), lifetime);
    },
    clearStore(context: any) {
      if (context.state.notifications.length > 0) {
        context.state.notifications.forEach((note: any) => {
          context.commit('removeNotification', note.id);
        });
      }
    },
  },
  getters: {},
  mutations: {
    addNotification(state: any, payload: { id: string; type: string; message: string }) {
      state.notifications.push(payload);
    },
    removeNotification(state: any, id: string) {
      state.notifications = state.notifications.filter((note: any) => note.id != id);
    },
  },
};

export default notifications;
