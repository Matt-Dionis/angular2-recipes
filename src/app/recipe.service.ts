import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipesUrl = 'app/recipes';

  constructor (private _http: Http) {}

  add(recipe: Recipe): Observable<Recipe[]> {
    let bodyString = JSON.stringify(recipe);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.recipesUrl, recipe, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  delete(id: string): Observable<void> {
    return this._http.delete(`${this.recipesUrl}/${id}`)
      .map(() => null)
      .catch(this.handleError);
  }

  get(id: string): Observable<Recipe> {
    return this._http.get(`${this.recipesUrl}/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  query(): Observable<Recipe[]> {
    return this._http.get(this.recipesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(recipe: Recipe): Observable<Recipe[]> {
    let bodyString = JSON.stringify(recipe);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.put(`${this.recipesUrl}/${recipe['id']}`, recipe, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
