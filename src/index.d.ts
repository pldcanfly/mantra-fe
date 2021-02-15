type ClassTable = {
  [propName: number]: ClassItem;
};

type ClassItem = {
  name: string;
  color: string;
  picture: string;
  speccs: SpeccTable;
};

type SpeccTable = {
  1: SpeccItem;
  2: SpeccItem;
  3: SpeccItem;
  4?: SpeccItem;
};

type SpeccItem = {
  name: string;
  role: 'damage' | 'heal' | 'tank';
  picture: string;
};

type RaceTable = {
  [propName: number]: RaceItem;
};

type RaceItem = {
  name: string;
  picture: RaceItemPicture;
};

type RaceItemPicture = {
  male: string;
  female: string;
};
