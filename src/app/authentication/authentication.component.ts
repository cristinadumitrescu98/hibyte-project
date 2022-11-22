import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from './auth.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  error: string | null = null
  constructor(private authService: AuthService, private router: Router) {
  }


  onSubmit(form: NgForm) {
this.authService.login(form.value.username, form.value.password);
    console.log(form.value);
    form.reset();
  }
}
