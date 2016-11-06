import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Recipe } from './recipe';

export class RecipesData implements InMemoryDbService {
  createDb() {
    let recipes: Recipe[] = [{
      type: 'dessert',
      name: 'Chocolate Cake'
    },{
      type: 'appetizer',
      name: 'Nachos'
    }, {
      type: 'entrée',
      name: 'Chicken Parmesan'
    }];
    return {
      recipes
    };
  }
}
