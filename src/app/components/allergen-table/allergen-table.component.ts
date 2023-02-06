import { Component, OnInit } from "@angular/core";

import { Allergen } from "src/app/data-model/allergen.model";
import { DataService, ItemKey } from "src/app/services/data.service";

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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllergens();
  }

  getAllergens() {
    this.dataService
      .fetchData(ItemKey.ALLERGEN, Allergen)
      .subscribe((allergens) => {
        this.allergens = allergens;
      });
  }

  addAllergen(event: any) {
    this.dataService.addItem(ItemKey.ALLERGEN, event).subscribe(() => {
      this.displayPopup = false;
      this.getAllergens();
    });
  }

  createNewAllergen() {
    this.displayPopup = true;
    this.selectedAllergen.name = "";
    this.selectedAllergen = new Allergen();
  }

  editSelectedAllergen(allergen: Allergen) {
    this.displayPopup = true;
    this.selectedAllergen.name = allergen.name;
    this.selectedAllergen = allergen;
  }

  onEditSaveButtonClick(event: any) {
    this.dataService.updateItem(ItemKey.ALLERGEN, event).subscribe();
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
      this.dataService
        .deleteItem(ItemKey.ALLERGEN, { id: this.currentDeleteId })
        .subscribe(() => {
          this.allergens.filter((allergen) => {
            return allergen.id != this.currentDeleteId;
          });
          this.getAllergens();
        });
    }
  }
}
