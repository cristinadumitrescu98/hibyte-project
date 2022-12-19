import { Component, OnInit } from "@angular/core";

import { Ingredient } from "src/app/data-model/ingredient.model";
import { IngredientService } from "../../services/ingredient.service";

@Component({
  selector: "app-ingredient-table",
  templateUrl: "./ingredient-table.component.html",
  styleUrls: ["./ingredient-table.component.css"],
})
export class IngredientTableComponent implements OnInit {
  ingredients: Ingredient[] = [];
  newIngredient: Ingredient = new Ingredient();
  displayPopup: boolean;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.fetchIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  showPopup() {
    this.displayPopup = true;
  }

  onSubmitNewIngredient() {
    this.ingredientService
      .addNewIngredient(this.newIngredient)
      .subscribe(() => {
        this.displayPopup = false;
        this.getIngredients();
      });
  }
}
