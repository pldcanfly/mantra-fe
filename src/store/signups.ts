import { useContext } from 'vue';

const removeItem = (arr: Array<number>, value: number) => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

const signups = {
  state: {
    signups: [
      {
        raidid: 1,
        actors: [
          { id: 1, position: 'invited' },
          { id: 2, position: 'invited' },
          { id: 3, position: 'benched' },
          { id: 4, position: 3 },
          { id: 5, position: 4 },
          { id: 10, position: 'invited' },
        ],
      },
      { raidid: 2, actors: [] },
      { raidid: 3, actors: [] },
      { raidid: 4, actors: [] },
    ],
  },
  getters: {
    getActors(context: any) {
      return (id: number, position: RaidPosition) => {
        return context.signups.find((item: RaidSignup) => item.raidid == id).actors.filter((actor: RaidSignupActor) => actor.position == position) || [];
      };
    },
    getActor(context: any) {
      return (id: number, position: RaidPosition) => {
        return context.signups.find((item: RaidSignup) => item.raidid == id).actors.find((actor: RaidSignupActor) => actor.position == position);
      };
    },
  },
  mutations: {
    setPosition(state: any, payload: { raidid: number; position: RaidPosition; actorid: number }) {
      state.signups
        .find((item: RaidSignup) => item.raidid == payload.raidid)
        .actors.map((actor: RaidSignupActor) => {
          if (actor.id == payload.actorid) actor.position = payload.position;
          return actor;
        });
    },
    addActor(state: any, payload: { raidid: number; position: RaidPosition; actorid: number }) {
      console.log(state.signups.find((item: RaidSignup) => item.raidid == payload.raidid).actors.find((actor: RaidSignupActor) => (actor.id = payload.actorid)));

      state.signups.find((item: RaidSignup) => item.raidid == payload.raidid).actors.push({ id: payload.actorid, position: payload.position });
    },
  },
  actions: {
    setPosition(context: any, payload: { raidid: number; position: RaidPosition; actor: RaidSignupActor }) {
      context.commit('setPosition', payload);
    },
    addActor(context: any, payload: { raidid: number; position: RaidPosition; actor: RaidSignupActor }) {
      context.commit('addActor', payload);
    },
  },
};

export default signups;
