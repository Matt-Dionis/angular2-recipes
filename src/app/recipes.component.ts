import { Component, OnInit } from '@angular/core';
import './rxjs-operators';

import { Ingredient } from './ingredient';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  errorMessage: string;
  nextId: number;
  measurements = ['cup', 'lb', 'oz', 'tbsp', 'tsp', 'whole'];
  newRecipe: Recipe = new Recipe();
  recipes: Recipe[];
  title: String = 'Recipes';
  types = ['appetizer', 'entrée', 'dessert'];

  constructor (private _recipeService: RecipeService) {
    this.newRecipe.ingredients = new Array<Ingredient>(new Ingredient());
  }

  ngOnInit() {
    this.getRecipes();
  }

  addIngredient() {
    this.newRecipe.ingredients.push(new Ingredient());
  }

  deleteRecipe(id: string) {
    this._recipeService.delete(id)
      .subscribe(() => {
        this.recipes = this.recipes.filter(h => h.id !== id),
        error =>  this.errorMessage = <any>error
      });
  }

  getRecipes() {
    this._recipeService.query()
      .subscribe(
        recipes => {
          this.recipes = recipes;
          this.nextId = this.recipes.length + 1;
        },
        error =>  this.errorMessage = <any>error
      );
  }

  onSubmit() {
    this.newRecipe.id = this.nextId.toString();
    this._recipeService.add(this.newRecipe)
      .subscribe(
        recipe => {
          this.recipes.push(recipe);
          this.newRecipe = new Recipe();
          this.newRecipe.ingredients = new Array<Ingredient>(new Ingredient());
        },
        error =>  this.errorMessage = <any>error
      );
  }

  removeIngredient(index) {
    this.newRecipe.ingredients.splice(index, 1);
  }

  setColor(type: string): string {
    const color = type === 'appetizer' ? 'blue' : type === 'entrée' ? 'green' : 'red';
    return color + ' badge';
  }
}
