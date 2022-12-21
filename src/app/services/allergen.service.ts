import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

import { Allergen } from "../data-model/allergen.model";

@Injectable({ providedIn: "root" })
export class AllergenService {
  constructor(private http: HttpClient) {}

  fetchAllergens(): Observable<Allergen[]> {
    return this.http.get<Allergen[]>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/items/allergens`
    );
  }

  addNewAllergen(allergen: Allergen): Observable<Allergen> {
    return this.http.post<Allergen>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/items/allergens`,
      allergen
    );
  }

  updateAllergen(allergen: Allergen): Observable<Allergen> {
    return this.http.put<Allergen>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/item/${allergen.id}`,
      allergen
    );
  }
}
