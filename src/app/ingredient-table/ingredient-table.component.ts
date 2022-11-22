import {Component, OnInit} from '@angular/core';

import { Ingredient } from '../data-model/ingredient.model';
import {IngredientService} from "./ingredient.service";
import {NgForm} from "@angular/forms";



@Component({
  selector: 'app-ingredient-table',
  templateUrl: './ingredient-table.component.html',
  styleUrls: ['./ingredient-table.component.css'],
})
export class IngredientTableComponent implements OnInit {
  ingredient: Ingredient[] = [
    new Ingredient(5, 'Test5', 2, 5, 4, 3, 2, 1),
    new Ingredient(5, 'Test4', 2, 55, 4, 3, 2, 1),
    new Ingredient(5, 'Test3', 2, 523, 4, 3, 2, 111),
    new Ingredient(5, 'Test2', 2, 5, 4, 3, 2, 1),
    new Ingredient(5, 'Test1', 2, 544, 4, 3, 2324, 1),
  ]

  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {

  }

  onSubmitForm(form: NgForm) {
    const value = form.value
    const newIngredient: Ingredient = new Ingredient(value.id, value.name, value.energy, value.fats, value.carbs, value.fibers, value.proteins, value.sugar)
    this.ingredientService.addIngredient(newIngredient)
    this.ingredient.push(newIngredient)
  }

  getIngredients(ingredients: Ingredient[]) {
    this.ingredientService.fetchIngredients().subscribe((ingredients:Ingredient[]) => {
      console.log(ingredients)
      this.ingredient = ingredients
    })
  }
}
