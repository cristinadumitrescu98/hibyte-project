import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import { Allergen } from '../data-model/allergen.model';
import {environment} from "../../environments/environment";

@Injectable()
export class AllergenService {
  constructor(private http: HttpClient) {}

  fetchAllergens(): Observable<Allergen[]> {
    return this.http.get<Allergen[]>(
      `${environment.baseURL}/api/scope/${environment.scopeKey}/items/allergens`, {headers: {'Content-type': 'application/x-www-form-urlencoded'}}
    );
  }
}
