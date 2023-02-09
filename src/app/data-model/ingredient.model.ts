import { DataItem } from "./dataItem.model";

export class Ingredient implements DataItem {
  id?: number;
  name: string;
  energy: number;
  fats: number;
  carbohydrates: number;
  fiber: number;
  protein: number;
  sugar: number;
}
