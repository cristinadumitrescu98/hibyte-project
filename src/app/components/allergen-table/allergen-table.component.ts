import { Component, OnInit } from "@angular/core";

import { Allergen } from "src/app/data-model/allergen.model";
import { AllergenService } from "../../services/allergen.service";

@Component({
  selector: "app-allergen-table",
  templateUrl: "./allergen-table.component.html",
  styleUrls: ["./allergen-table.component.css"],
})
export class AllergenTableComponent implements OnInit {
  allergens: Allergen[] = [];
  selectedAllergen: Allergen = new Allergen();

  displayPopup: boolean;
  displayDeletePopup: boolean;

  currentDeleteId: number;

  constructor(private allergenService: AllergenService) {}

  ngOnInit() {
    this.getAllergens();
  }

  getAllergens() {
    this.allergenService.fetchAllergens().subscribe((allergens) => {
      this.allergens = allergens;
    });
  }

  addAllergen(event: any) {
    this.allergenService.addNewAllergen(event).subscribe(() => {
      this.displayPopup = false;
      this.getAllergens();
    });
  }

  newAllergen() {
    this.displayPopup = true;
    this.selectedAllergen.name = "";
    this.selectedAllergen = new Allergen();
  }

  editAllergen(allergen: Allergen) {
    this.displayPopup = true;
    this.selectedAllergen = allergen;
  }

  onEditSaveButtonClick(event: any) {
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
          this.allergens.filter(
            (allergen) => allergen.id != this.currentDeleteId
          );
          this.getAllergens();
        });
    }
  }
}
