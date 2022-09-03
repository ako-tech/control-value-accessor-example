import { Color } from './color';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  colors: Color[];
}
