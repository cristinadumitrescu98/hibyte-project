import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const access_token = this.authService.getToken();
    let request = req;
    console.log(req);

    if (access_token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    }
    return next.handle(request);
  }
}
