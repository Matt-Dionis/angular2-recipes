import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Recipe } from './recipe';

// All recipes from www.recipe.com
export class RecipesData implements InMemoryDbService {
  createDb() {
    let recipes: Recipe[] = [{
      id: '1',
      type: 'dessert',
      name: 'Chocolate Cake',
      instructions: `1. Allow butter and eggs to stand at room temperature for 30 minutes. Meanwhile, lightly grease
        bottoms of two 8x8x2-inch square or 9x1-1/2-inch round cake pans. Line bottoms of pans with parchment or waxed
        paper. Grease and lightly flour bottoms and sides of pans. Or, grease one 13x9x2-inch baking pan. Set pan(s)
        aside. In a medium bowl stir together flour, cocoa powder, baking soda, baking powder; and salt; set aside.
        2. Preheat oven to 350 degrees F. In a large mixing bowl beat butter with an electric mixer on medium to high speed
        for 30 seconds. Gradually add sugar, about 1/4 cup at a time, beating on medium speed until well combined
        (3 to 4 minutes). Scrape sides of bowl; continue beating on medium speed for 2 minutes more. Add eggs 1 at a time,
        beating after each addition (about 1 minute total). Beat in vanilla. 3. Alternately add flour mixture and milk to butter
        mixture, beating on low speed just until combined after each addition. Beat on medium to high speed for 20 seconds more.
        Spread batter into the prepared pan(s). 4. Bake for 35 to 40 minutes for 8-inch pans and 13x9x2-inch pan, 30 to 35 minutes
        for 9-inch pans, or until a wooden toothpick inserted near centers comes out clean. Cool cake layers in pans on wire racks
        for 10 minutes. Remove cake layers from pans. Peel off paper. Cool thoroughly on racks. Or, place 13x9x2-inch cake in pan
        on a wire rack; cool thoroughly. Frost with desired frosting. 5. Makes 12 to 16 servings.`,
      ingredients: [{
        name: 'butter',
        measurement: 'cup',
        amount: 0.75
      },{
        name: 'eggs',
        measurement: 'whole',
        amount: 3
      },{
        name: 'flour',
        measurement: 'cups',
        amount: 2
      },{
        name: 'unsweetened cocoa powder',
        measurement: 'cup',
        amount: 0.75
      },{
        name: 'baking soda',
        measurement: 'tsp',
        amount: 1
      },{
        name: 'baking powder',
        measurement: 'tsp',
        amount: 0.75
      },{
        name: 'salt',
        measurement: 'tsp',
        amount: 0.5
      },{
        name: 'sugar',
        measurement: 'cup',
        amount: 2
      },{
        name: 'vanilla',
        measurement: 'tsp',
        amount: 2
      },{
        name: 'milk',
        measurement: 'cup',
        amount: 1.5
      }]
    },{
      id: '2',
      type: 'appetizer',
      name: 'Nachos',
      instructions: `1. Preheat oven to 400 degrees F. Divide tortilla chips between two 12-inch round pizza pans.
        Top chips with half of the cheddar cheese, half of the Monterey Jack cheese, the green onions, tomato, and
        chile peppers. Sprinkle with remaining cheeses, the olives, and black beans. Bake, one pan at a time, for 
        5 to 7 minutes or until cheese melts. Serve immediately. If desired, serve with salsa, sour cream, and/or
        guacamole. Makes 8 to 10 servings.`,
      ingredients: [{
        name: 'tortilla chips',
        measurement: 'oz',
        amount: 8
      },{
        name: 'shredded cheddar cheese',
        measurement: 'cup',
        amount: 2
      },{
        name: 'shredded Monterey Jack cheese',
        measurement: 'cup',
        amount: 2
      },{
        name: 'green onion',
        measurement: 'whole',
        amount: 3
      },{
        name: 'chopped seeded tomato',
        measurement: 'cup',
        amount: 1
      },{
        name: 'can diced green chile peppers',
        measurement: 'oz',
        amount: 4
      },{
        name: 'can sliced pitted ripe olives',
        measurement: 'oz',
        amount: 2.25
      },{
        name: 'can black beans',
        measurement: 'oz',
        amount: 15
      }]
    }, {
      id: '3',
      type: 'entrée',
      name: 'Chicken Parmesan',
      instructions: `Heat oven to 350 degrees F. Place bread crumbs and flour separately in 2 shallow dishes and the eggs
        in a shallow bowl. Coat chicken in flour and dip in egg, shaking off excess. Coat with bread crumbs and place on a plate.
        In a large nonstick skillet, heat 2 tablespoons of the oil over medium-high heat. Saute chicken 2 to 3 minutes per side,
        until browned. In the bottom of a baking dish, mix 1/4 cup of the marinara sauce with 2 tablespoons water. Place chicken
        in dish and top each with 3 tablespoons sauce and 3 tablespoons cheese. Bake at 350 degrees F, covered, for 15 minutes.
        Meanwhile, in a large skillet, simmer broth and garlic, covered, 2 minutes. Add the green beans and mushrooms and simmer,
        covered, for 5 minutes, until tender. Drain and toss with the remaining teaspoon olive oil and season with salt and pepper.
        Serve with chicken.`,
      ingredients: [{
        name: 'whole-wheat bread crumbs',
        measurement: 'cup',
        amount: 0.5
      },{
        name: 'flour',
        measurement: 'cup',
        amount: 0.33
      },{
        name: 'egg',
        measurement: 'whole',
        amount: 2
      },{
        name: 'boneless, skinless chicken breast',
        measurement: 'whole',
        amount: 4
      },{
        name: 'olive oil',
        measurement: 'tbsp',
        amount: 2
      },{
        name: 'marinara sauce',
        measurement: 'cup',
        amount: 1
      },{
        name: 'shredded reduced-fat mozzarella cheese',
        measurement: 'cup',
        amount: 0.75
      },{
        name: 'low-sodium chicken broth',
        measurement: 'cup',
        amount: 0.75
      },{
        name: 'smashed garlic',
        measurement: 'clove',
        amount: 4
      },{
        name: 'green beans',
        measurement: 'lb',
        amount: 1.5
      },{
        name: 'sliced mushrooms',
        measurement: 'lb',
        amount: 0.5
      },{
        name: 'salt',
        measurement: 'tsp',
        amount: 0.125
      },{
        name: 'black pepper',
        measurement: 'tsp',
        amount: 0.125
      }]
    }];
    return {
      recipes
    };
  }
}
