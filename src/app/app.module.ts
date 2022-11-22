import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IngredientTableComponent } from './ingredient-table/ingredient-table.component';
import { AllergenTableComponent } from './allergen-table/allergen-table.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AllergenService } from './allergen-table/allergen.service';
import {IngredientService} from './ingredient-table/ingredient.service'
import { FormsModule } from '@angular/forms';
import { AuthService } from './authentication/auth.service';
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    AppComponent,
    IngredientTableComponent,
    AllergenTableComponent,
    AuthenticationComponent,
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
  ],
  providers: [AllergenService, AuthService, IngredientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
