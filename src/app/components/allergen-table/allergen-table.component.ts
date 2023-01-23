import {
  Component,
  Input,
  OnChanges,
  OnInit,
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
  @Input()
  editMode: boolean = false;

  allergens: Allergen[] = [];

  addAllergenForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
  });

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
    let newAllergen = { name: this.addAllergenForm.value.name };
    this.allergenService.addNewAllergen(newAllergen).subscribe(() => {
      this.displayPopup = false;
      this.getAllergens();
    });

    this.addAllergenForm.reset();
  }

  showEditPopup(allergen: Allergen) {
    this.displayEditPopup = true;
    this.currentEditName = allergen.name;
    this.currentEditId = allergen.id;
  }

  onEditSaveButtonClick(allergen: any) {
    this.allergens.forEach((allergenElement) => {
      if (allergenElement.id === this.selectedAllergen.id) {
        allergenElement.name = this.selectedAllergen.name;
        this.allergenService
          .updateAllergen(allergenElement)
          .subscribe((res) => {
            if (res) {
              allergenElement = res;
            }
          });
      }
    });
    this.displayPopup = false;
  }

  showDeleteModalDialog(deleteId: number) {
    this.displayDeletePopup = true;
    this.currentDeleteId = deleteId;
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
