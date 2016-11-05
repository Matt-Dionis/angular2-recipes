import { Component } from '@angular/core';

import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Recipes';
  recipes: Recipe[] = [{
    type: 'dessert',
    name: 'Chocolate Cake'
  },{
    type: 'appetizer',
    name: 'Nachos'
  }, {
    type: 'entrée',
    name: 'Chicken Parmesan'
  }];

  setColor(type: string): string {
    const color = type === 'appetizer' ? 'blue' : type === 'entrée' ? 'green' : 'red';
    return color + ' badge';
  }
}
