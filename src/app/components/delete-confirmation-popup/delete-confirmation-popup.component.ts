import { Component, Injectable } from "@angular/core";

@Component({
  selector: "app-delete-confirmation-popup",
  templateUrl: "./delete-confirmation-popup.component.html",
  styleUrls: ["./delete-confirmation-popup.component.css"],
})
@Injectable({ providedIn: "root" })
export class DeleteConfirmationPopupComponent {
  displayModalPopup: boolean;

  showModalDialog() {
    this.displayModalPopup = true;
    console.log("popup works");
  }
}
