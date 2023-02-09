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
  displayEditPopup: boolean;
  displayDeletePopup: boolean;

  currentEditId?: number;
  currentEditName: string;
  currentEditEnergy: number;
  currentEditFats: number;
  currentEditCarbohydrates: number;
  currentEditFibers: number;
  currentEditProteins: number;
  currentEditSugar: number;

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

  showPopup() {
    this.displayPopup = true;
  }

  onSubmitNewIngredient() {
    this.ingredientService
      .addNewIngredient(this.newIngredient)
      .subscribe(() => {
        this.displayPopup = false;
        this.newIngredient = new Ingredient();
        this.getIngredients();
      });
  }

  showIngredientEditPopup(ingredient: Ingredient) {
    this.displayEditPopup = true;
    this.currentEditId = ingredient.id;
    this.currentEditName = ingredient.name;
    this.currentEditEnergy = ingredient.energy;
    this.currentEditFats = ingredient.fats;
    this.currentEditCarbohydrates = ingredient.carbohydrates;
    this.currentEditFibers = ingredient.fiber;
    this.currentEditProteins = ingredient.protein;
    this.currentEditSugar = ingredient.sugar;
  }

  onEditIngredientSaveButtonClick() {
    this.ingredients.forEach((ingElement) => {
      if (ingElement.id === this.currentEditId) {
        ingElement.name = this.currentEditName;
        ingElement.energy = this.currentEditEnergy;
        ingElement.fats = this.currentEditFats;
        ingElement.fiber = this.currentEditFibers;
        ingElement.protein = this.currentEditProteins;
        ingElement.sugar = this.currentEditSugar;
        this.ingredientService.updateIngredient(ingElement).subscribe((res) => {
          if (res) {
            ingElement = res;
          }
        });
      }
    });
    this.displayEditPopup = false;
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
}
