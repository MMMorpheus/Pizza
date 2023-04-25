
export enum DoughtType {
  тонке,
  традиційне,
}

export enum Order {
  asc = "asc",
  desc = "desc"
}

export interface ICategory {
  title: string;
  option: number;
}

export interface IOption {
  title: string,
  query: string
}
