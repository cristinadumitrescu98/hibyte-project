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
  selectedIngredient: Ingredient;

  displayPopup: boolean;
  displayDeletePopup: boolean;

  currentDeleteId: number;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.fetchIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  newIngredient() {
    this.displayPopup = true;
    this.selectedIngredient = new Ingredient();
    this.selectedIngredient.name = "";
  }

  onSubmitNewIngredient(event: any) {
    this.ingredientService.addNewIngredient(event).subscribe(() => {
      this.displayPopup = false;
      this.getIngredients();
    });
  }

  onEditIngredientSaveButtonClick(event: any) {
    this.ingredientService.updateIngredient(event).subscribe();
    this.displayPopup = false;
  }

  editIngredient(ingredient: Ingredient) {
    this.displayPopup = true;
    this.selectedIngredient = ingredient;
  }

  showIngredientDeletePopup(deleteIngredientId: number) {
    this.displayDeletePopup = true;
    this.currentDeleteId = deleteIngredientId;
  }

  onDeleteIngredientPopupClosed(ingredientDeletion: boolean) {
    this.displayDeletePopup = false;
    if (ingredientDeletion) {
      this.ingredientService
        .deleteIngredient(this.currentDeleteId)
        .subscribe(() => {
          this.ingredients.filter((ingredient) => {
            return ingredient.id != this.currentDeleteId;
          });
          this.getIngredients();
        });
    }
  }

  closePopup(event: any) {
    this.displayPopup = false;
  }
}
