import { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  categories: Category[];
  rating: number;
  size: Size;
  color: Color
}

export enum Size {
  PP = "PP",
  P = "P",
  M = "M",
  G = "G",
  GG = "GG"
}

export enum Color {
  BLACK = "BLACK",
  WHITE = "WHITE",
  BLUE = "BLUE",
  RED = "RED",
  GREEN = "GREEN",
  YELLOW = "YELLOW"
}