import { Component, OnInit } from "@angular/core";

import { Ingredient } from "src/app/data-model/ingredient.model";
import { IngredientService } from "../../services/ingredient.service";

@Component({
  selector: "app-ingredient-table",
  templateUrl: "./ingredient-table.component.html",
  styleUrls: ["./ingredient-table.component.css"],
})
export class IngredientTableComponent implements OnInit {
  ingredient: Ingredient[] = [];
  newIng: Ingredient = new Ingredient();
  displayPopup: boolean;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.fetchIngredients().subscribe((ingredients) => {
      console.log(ingredients);
      this.ingredient = ingredients;
    });
  }

  showPopup() {
    this.displayPopup = true;
  }

  onSubmitNewIngredient() {
    this.ingredientService.addNewIngredients(this.newIng).subscribe((res) => {
      this.displayPopup = false;
      this.getIngredients();
      res.values;
    });
  }
}
