import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import {Router} from "@angular/router";



@Injectable({ providedIn: 'root' })
export class AuthService {
  public token: string = ''
  public type_token: string = ''

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
   const params = new HttpParams().set('username', username)
     .set('password', password)
     .set('grant_type', 'password')
     .set('client_id', environment.client_id)
     .set('name', 'webApp');

   return this.http.post<any>(`${environment.baseURL}/api/auth/token`, params, {headers: {'Content-type': 'application/x-www-form-urlencoded'}}).subscribe(res => {
     console.log(res)
   })
  }
}
