import { Ingredient } from './ingredient';

export class Recipe {
  id: string;
  type: string;
  name: string;
  instructions: string;
  ingredients: Ingredient[];
}
