import { Component, OnInit, Inject } from "@angular/core";

import { Store } from "@ngrx/store";
import { AppState } from "./../../app.state";
import * as NoteActions from "./../../actions/note.actions";

import { MatDialog, MatDialogConfig } from "@angular/material";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "remove-note-dialog",
  templateUrl: "remove-note-dialog.html"
})
export class RemoveNoteDialog {
  constructor(
    public dialogRef: MatDialogRef<RemoveNoteDialog>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(id: number): void {
    this.dialogRef.close();
    console.log(`Remove note with id ${id}`);
    this.store.dispatch(new NoteActions.RemoveNote(id));
  }
}
