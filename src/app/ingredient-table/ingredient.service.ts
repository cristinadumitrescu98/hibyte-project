import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {Ingredient} from "../data-model/ingredient.model";
import {environment} from "../../environments/environment";

@Injectable()
export class IngredientService {
  ingredientChanged = new Subject<Ingredient[]>()
  private ingredients : Ingredient[] = []

  getIngredient(id: number) {
    return this.ingredients[id]
  }

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientChanged.next(this.ingredients.slice())
  }

  constructor(private http: HttpClient) {}


  fetchIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}items/ingredient`
    );
  }
}
