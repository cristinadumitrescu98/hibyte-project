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

  @Output() ingredientAdded: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();
  @Output() ingredientEdited: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();
  @Output() closeAddEditIngredientPopup: EventEmitter<boolean> =
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
      this.ingredientAdded.emit(this.ingredient);
    } else {
      this.ingredientEdited.emit(this.ingredient);
    }
    this.onCloseAddEditIngredientPopup(true);
  }

  onCloseAddEditIngredientPopup(onClosing: boolean) {
    this.closeAddEditIngredientPopup.emit(onClosing);
    this.displayAddEditIngredientPopup = false;
  }
}
