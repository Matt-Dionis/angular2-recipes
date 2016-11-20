import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import './rxjs-operators';

import { Ingredient } from './ingredient';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  errorMessage: string;
  measurements = ['cup', 'lb', 'oz', 'tbsp', 'tsp', 'whole'];
  recipe: Recipe;
  types = ['appetizer', 'entrée', 'dessert'];

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this._route.params
      .switchMap((params: Params) => this._recipeService.get(params['id']))
      .subscribe(recipe => this.recipe = recipe);
  }

  addIngredient() {
    this.recipe.ingredients.push(new Ingredient());
  }

  goBack(): void {
    this._location.back();
  }

  onSubmit() {
    this._recipeService.update(this.recipe)
      .subscribe(
        () => console.log('Saved!'),
        error => this.errorMessage = <any>error
      );
  }

  removeIngredient(index) {
    this.recipe.ingredients.splice(index, 1);
  }
}
