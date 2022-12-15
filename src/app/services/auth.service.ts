import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class AuthService {
  userLoggedIn: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    const params = new HttpParams()
      .set("username", username)
      .set("password", password)
      .set("grant_type", "password")
      .set("client_id", environment.client_id)
      .set("name", "webApp");

    return this.http
      .post<any>(`${environment.baseURL}/api/auth/token`, params, {
        headers: {
          Authorization: `Basic ${btoa(username + ":" + password)}`,
          "Content-type": "application/x-www-form-urlencoded",
        },
      })
      .subscribe((res) => {
        localStorage.setItem("token", res.access_token);
        this.router.navigate(["/allergens"]);
      });
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    this.userLoggedIn = true;
    return !!this.getToken();
  }
}
