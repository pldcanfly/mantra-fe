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
  role: 'ranged' | 'melee' | 'heal' | 'tank';
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

type Char = {
  id: number;
  name: string;
  class: number;
  race: number;
  specc: number;
  female: boolean;
  rank: string;
  account: number;
};

type RaidEvent = {
  id: number;
  name: string;
  picture: string;
  date: string;
  description: string;
  size: number;
};

type RaidSignup = {
  raidid: number;
  actors: Array<RaidSignupActor>;
};

type RaidSignupActor = {
  id: number;
  position: RaidPosition;
};

type RaidSpot = {
  free: boolean;
  value: Char | string;
};

type RaidPosition = 'invited' | 'signed' | 'rejected' | 'benched' | number;
