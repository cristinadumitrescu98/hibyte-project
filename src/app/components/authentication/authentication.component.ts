import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"],
})
export class AuthenticationComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    console.log(this.loginForm.getRawValue);

    this.authService.login(username, password);
    console.log(username, password);
    this.loginForm.reset();
  }
}
