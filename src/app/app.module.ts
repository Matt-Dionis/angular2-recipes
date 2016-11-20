import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MaterialModule } from '@angular/material';

import { RecipesData } from './recipes-data';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
      },
      {
        path: 'recipes',
        component: RecipesComponent
      },
      {
        path: 'recipes/:id',
        component: RecipeDetailComponent
      }
    ]),
    InMemoryWebApiModule.forRoot(RecipesData),
    MaterialModule.forRoot()
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
