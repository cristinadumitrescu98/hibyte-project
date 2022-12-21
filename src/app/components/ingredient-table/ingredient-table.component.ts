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

  currentEditName: string;
  currentEditEnergy: number;
  currentEditFats: number;
  currentEditCarbohydrates: number;
  currentEditFibers: number;
  currentEditProteins: number;
  currentEditSugar: number;

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

  showEditPopup(
    name: string,
    energy: number,
    fats: number,
    carbohydrates: number,
    fibers: number,
    proteins: number,
    sugar: number
  ) {
    this.displayEditPopup = true;
    this.currentEditName = name;
    this.currentEditEnergy = energy;
    this.currentEditFats = fats;
    this.currentEditCarbohydrates = carbohydrates;
    this.currentEditFibers = fibers;
    this.currentEditProteins = proteins;
    this.currentEditSugar = sugar;
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
