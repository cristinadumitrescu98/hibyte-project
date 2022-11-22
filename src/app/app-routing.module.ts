import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllergenTableComponent } from './allergen-table/allergen-table.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { IngredientTableComponent } from './ingredient-table/ingredient-table.component';

const routes: Routes = [
  { path: 'allergens', component: AllergenTableComponent },
  { path: 'ingredients', component: IngredientTableComponent },
  { path: 'auth', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
