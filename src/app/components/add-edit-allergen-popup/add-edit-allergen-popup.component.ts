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
  @Output() saveButtonClicked: EventEmitter<Allergen> =
    new EventEmitter<Allergen>();
  @Output() editButtonClicked: EventEmitter<Allergen> =
    new EventEmitter<Allergen>();
  @Output() closeAddEditPopup: EventEmitter<boolean> =
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
      this.saveButtonClicked.emit(this.allergen);
    } else {
      this.editButtonClicked.emit(this.allergen);
    }
    this.onCloseAddEditPopup(true);
  }

  onCloseAddEditPopup(onClosing: boolean) {
    this.closeAddEditPopup.emit(onClosing);
    this.displayAddEditPopup = false;
  }
}
