import { Component, OnInit } from '@angular/core';
import './rxjs-operators';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
  errorMessage: string;
  title: String = 'Recipes';
  recipes: Recipe[];

  constructor (private _recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this._recipeService.query()
      .subscribe(
        recipes => this.recipes = recipes,
        error =>  this.errorMessage = <any>error
      );
  }

  setColor(type: string): string {
    const color = type === 'appetizer' ? 'blue' : type === 'entrée' ? 'green' : 'red';
    return color + ' badge';
  }
}
