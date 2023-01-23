import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";

import { Allergen } from "src/app/data-model/allergen.model";

@Component({
  selector: "app-add-edit-allergen-popup",
  templateUrl: "./add-edit-allergen-popup.component.html",
  styleUrls: ["./add-edit-allergen-popup.component.css"],
})
export class AddEditAllergenPopupComponent implements OnChanges {
  @Input() displayAddEditPopup: boolean;
  @Input() allergen: Allergen;
  @Output() allergenAdded: EventEmitter<Allergen> =
    new EventEmitter<Allergen>();
  @Output() allergenEdited: EventEmitter<Allergen> =
    new EventEmitter<Allergen>();
  @Output() closeAddEditPopup: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  addMode: boolean;
  name?: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.allergen) {
      if (this.allergen == undefined) {
        this.addMode = true;
        this.allergen = new Allergen();
        console.log(this.allergen);
      } else {
        this.addMode = false;
        this.name = this.allergen?.name;
        console.log(this.allergen);
      }
    }
  }

  emitClickEvent() {
    if (this.name) {
      this.allergen.name = this.name;
    }
    if (this.addMode) {
      this.allergenAdded.emit(this.allergen);
      console.log("add");
    } else {
      this.allergenEdited.emit(this.allergen);
      console.log("edit");
    }
    this.closePopup();
  }

  closePopup() {
    this.allergen = {} as Allergen;
    this.name = "";
    this.displayAddEditPopup = false;
    this.closeAddEditPopup.emit();
  }
}
