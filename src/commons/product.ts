import { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  categories: Category[];
}