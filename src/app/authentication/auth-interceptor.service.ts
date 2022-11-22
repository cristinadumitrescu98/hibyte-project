import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import {Injectable} from "@angular/core";

import { AuthService } from './auth.service';


@Injectable({providedIn: 'root'})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler){
    const access_token = this.authService.token
    const token_type = this.authService.type_token

    if (access_token) {
      req.clone({
        setHeaders: {
          Authorization: `${token_type} ${access_token}`
        }
      })
    }
    return next.handle(req)

    }

}
