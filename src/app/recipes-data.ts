import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Recipe } from './recipe';

export class RecipesData implements InMemoryDbService {
  createDb() {
    let recipes: Recipe[] = [{
      id: '1',
      type: 'dessert',
      name: 'Chocolate Cake'
    },{
      id: '2',
      type: 'appetizer',
      name: 'Nachos'
    }, {
      id: '3',
      type: 'entrée',
      name: 'Chicken Parmesan'
    }];
    return {
      recipes
    };
  }
}
