import { Component, OnInit } from "@angular/core";

import { Ingredient } from "src/app/data-model/ingredient.model";
import { DataService, ItemKey } from "src/app/services/data.service";

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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.dataService
      .fetchData(ItemKey.INGREDIENT, Ingredient)
      .subscribe((ingredients) => {
        this.ingredients = ingredients;
      });
  }

  createNewIngredient() {
    this.displayPopup = true;
    this.selectedIngredient = new Ingredient();
    this.selectedIngredient.name = "";
  }

  onSubmitNewIngredient(event: any) {
    this.dataService.addItem(ItemKey.INGREDIENT, event).subscribe(() => {
      this.displayPopup = false;
      this.getIngredients();
    });
  }

  onEditIngredientSaveButtonClick(event: any) {
    this.dataService.updateItem(ItemKey.INGREDIENT, event).subscribe();
    this.displayPopup = false;
  }

  editSelectedIngredient(ingredient: Ingredient) {
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
      this.dataService
        .deleteItem(ItemKey.INGREDIENT, { id: this.currentDeleteId })
        .subscribe(() => {
          this.ingredients.filter(
            (ingredient) => ingredient.id != this.currentDeleteId
          );
          this.getIngredients();
        });
    }
  }

  closePopup(event: any) {
    this.displayPopup = false;
  }
}
