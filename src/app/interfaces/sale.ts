import { Product } from "./product";

export interface Sale {
  id: number;
  date: string;
  products: Product[];
  quantities: number[];
  totalSold: number;
}