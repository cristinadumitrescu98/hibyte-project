import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-delete-confirmation-popup",
  templateUrl: "./delete-confirmation-popup.component.html",
  styleUrls: ["./delete-confirmation-popup.component.css"],
})
export class DeleteConfirmationPopupComponent {
  @Input() deleteModalPopup: boolean = false;

  @Output() deletePopupClosed: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  closePopup(withDeletion: boolean) {
    this.deletePopupClosed.emit(withDeletion);
  }
}
