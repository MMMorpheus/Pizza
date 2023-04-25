
export enum DoughtType {
  тонке,
  традиційне,
}

export interface ICategory {
  title: string;
  option: number;
}

export interface IOption {
  title: string,
  query: string
}
