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
  @Output() closeAddEditPopupClicked: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  addMode: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.allergen?.firstChange) {
      if (!this.allergen.id) {
        this.addMode = true;
        this.allergen = new Allergen();
        this.allergen.name = "";
      } else {
        this.addMode = false;
      }
    }
  }

  emitClickEvent() {
    if (this.addMode) {
      this.allergenAdded.emit(this.allergen);
    } else {
      this.allergenEdited.emit(this.allergen);
    }
    this.onCloseAddEditPopup(true);
  }

  onCloseAddEditPopup(onClosing: boolean) {
    this.closeAddEditPopupClicked.emit(onClosing);
    this.displayAddEditPopup = false;
  }
}
