import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./components/authentication/auth.guard";
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { AllergenTableComponent } from "./components/allergen-table/allergen-table.component";
import { IngredientTableComponent } from "./components/ingredient-table/ingredient-table.component";

const routes: Routes = [
  { path: "auth", component: AuthenticationComponent },
  {
    path: "allergens",
    component: AllergenTableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "ingredients",
    component: IngredientTableComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
