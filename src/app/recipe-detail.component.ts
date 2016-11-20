import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import './rxjs-operators';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  recipe: Recipe;

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

  goBack(): void {
    this._location.back();
  }
}
