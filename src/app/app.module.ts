import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { ToolbarModule } from "primeng/toolbar";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeaderComponent } from "./components/header/header.component";
import { AllergenTableComponent } from "./components/allergen-table/allergen-table.component";
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { IngredientTableComponent } from "./components/ingredient-table/ingredient-table.component";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { AuthService } from "./services/auth.service";
import { AllergenService } from "./services/allergen.service";
import { IngredientService } from "./services/ingredient.service";
import { DeleteConfirmationPopupComponent } from "./components/delete-confirmation-popup/delete-confirmation-popup.component";
import { AddEditAllergenPopupComponent } from './components/allergen-table/add-edit-allergen-popup/add-edit-allergen-popup.component';

@NgModule({
  declarations: [
    IngredientTableComponent,
    AllergenTableComponent,
    AuthenticationComponent,
    NavbarComponent,
    HeaderComponent,
    AppComponent,
    DeleteConfirmationPopupComponent,
    AddEditAllergenPopupComponent,
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
