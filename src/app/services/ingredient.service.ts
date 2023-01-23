import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

import { Ingredient } from "../data-model/ingredient.model";

@Injectable()
export class IngredientService {
  constructor(private http: HttpClient) {}

  fetchIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/items/ingredient`
    );
  }

  addNewIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/items/ingredient`,
      ingredient
    );
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/item/${ingredient.id}`,
      ingredient
    );
  }

  deleteIngredient(ingredientId: number): Observable<Ingredient> {
    return this.http.delete<Ingredient>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/item/${ingredientId}`
    );
  }
}
