import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Ingredient } from "src/app/data-model/ingredient.model";

@Component({
  selector: "app-add-edit-ingredient-popup",
  templateUrl: "./add-edit-ingredient-popup.component.html",
  styleUrls: ["./add-edit-ingredient-popup.component.css"],
})
export class AddEditIngredientPopupComponent implements OnChanges {
  @Input() displayAddEditIngredientPopup: boolean;
  @Input() ingredient: Ingredient;

  @Output() ingredientSaveButtonClicked: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();
  @Output() ingredientEditButtonClicked: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();
  @Output() closeAddEditIngredientPopupClicked: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  isAddMode: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ingredient?.firstChange) {
      if (!this.ingredient.id) {
        this.isAddMode = true;
        this.ingredient = new Ingredient();
      } else {
        this.isAddMode = false;
      }
    }
  }

  emitClickEvent() {
    if (this.isAddMode) {
      this.ingredientSaveButtonClicked.emit(this.ingredient);
    } else {
      this.ingredientEditButtonClicked.emit(this.ingredient);
    }
    this.onCloseAddEditIngredientPopup(true);
  }

  onCloseAddEditIngredientPopup(onClosing: boolean) {
    this.closeAddEditIngredientPopupClicked.emit(onClosing);
    this.displayAddEditIngredientPopup = false;
  }
}
