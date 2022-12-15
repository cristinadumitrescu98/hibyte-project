import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { RippleModule } from "primeng/ripple";
import { ToolbarModule } from "primeng/toolbar";
import { DialogModule } from "primeng/dialog";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AllergenTableComponent } from "./components/allergen-table/allergen-table.component";
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { IngredientTableComponent } from "./components/ingredient-table/ingredient-table.component";
import { AllergenService } from "./services/allergen.service";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { AuthService } from "./services/auth.service";
import { IngredientService } from "./services/ingredient.service";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    IngredientTableComponent,
    AllergenTableComponent,
    AuthenticationComponent,
    NavbarComponent,
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    RippleModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToolbarModule,
    DialogModule,
  ],
  providers: [
    AllergenService,
    AuthService,
    IngredientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
