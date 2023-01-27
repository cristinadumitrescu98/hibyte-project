import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Allergen } from "src/app/data-model/allergen.model";
import { AllergenService } from "../../services/allergen.service";

@Component({
  selector: "app-allergen-table",
  templateUrl: "./allergen-table.component.html",
  styleUrls: ["./allergen-table.component.css"],
})
export class AllergenTableComponent implements OnInit {
  allergens: Allergen[] = [];

  sentAllergen: Allergen = new Allergen();
  selectedAllergen: Allergen;

  displayPopup: boolean;
  displayEditPopup: boolean;
  displayDeletePopup: boolean;

  currentEditId?: number;
  currentEditName: string;

  currentDeleteId: number;

  constructor(private allergenService: AllergenService) {}

  ngOnInit() {
    this.getAllergens();
  }

  showPopup() {
    this.displayPopup = true;
  }

  getAllergens() {
    this.allergenService.fetchAllergens().subscribe((allergens) => {
      this.allergens = allergens;
    });
  }

  addAllergen(event: any) {
    this.allergenService.addNewAllergen(event).subscribe(() => {
      this.displayPopup = false;
      this.sentAllergen = new Allergen();
      this.getAllergens();
    });
  }

  showEditPopup(allergen: Allergen) {
    this.displayEditPopup = true;
    this.currentEditName = allergen.name;
    this.currentEditId = allergen.id;
  }

  onEditSaveButtonClick(event: any) {
    console.log(event);
    this.allergenService.updateAllergen(event).subscribe();
    this.displayPopup = false;
  }

  showDeleteModalDialog(deleteId: number) {
    this.displayDeletePopup = true;
    this.currentDeleteId = deleteId;
  }

  closingAddEditPopup(event: any) {
    this.displayPopup = false;
  }

  onDeletePopupClosed(deletion: boolean) {
    this.displayDeletePopup = false;
    if (deletion) {
      this.allergenService
        .deleteAllergen(this.currentDeleteId)
        .subscribe(() => {
          this.allergens.filter((allergen) => {
            return allergen.id != this.currentDeleteId;
          });
          this.getAllergens();
        });
    }
  }
}
