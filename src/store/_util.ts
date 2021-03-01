const set: Function = (key: any) => (state: any, val: any) => {
  state[key] = val;
};

export { set };
