import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DataItem } from "../data-model/dataItem.model";

export enum ItemKey {
  ALLERGEN = "allergens",
  INGREDIENT = "ingredient",
}

@Injectable({ providedIn: "root" })
export class DataService {
  constructor(private http: HttpClient) {}

  fetchData<T extends DataItem>(
    itemKey: ItemKey,
    type: new () => T
  ): Observable<T[]> {
    return this.http.get<T[]>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/items/${itemKey}`
    );
  }

  addItem<T extends DataItem>(itemKey: ItemKey, item: T): Observable<T> {
    return this.http.post<T>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/items/${itemKey}`,
      item
    );
  }

  updateItem<T extends DataItem>(itemKey: ItemKey, item: T): Observable<T> {
    return this.http.put<T>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/item/${item.id}`,
      item
    );
  }

  deleteItem<T extends DataItem>(itemKey: ItemKey, item: T): Observable<T> {
    return this.http.delete<T>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/item/${item.id}`
    );
  }
}
