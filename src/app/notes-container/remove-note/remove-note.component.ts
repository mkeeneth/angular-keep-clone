import { Component, OnInit, Input } from "@angular/core";

import { Store } from "@ngrx/store";
import { AppState } from "./../../app.state";
import * as NoteActions from "./../../actions/note.actions";

import { MatDialog, MatDialogConfig } from "@angular/material";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { RemoveNoteDialog } from "./remove-note-dialog.component";

@Component({
  selector: "app-remove-note",
  templateUrl: "./remove-note.component.html",
  styleUrls: ["./remove-note.component.css"]
})
export class RemoveNoteComponent implements OnInit {
  @Input() id: number;

  constructor(private dialog: MatDialog, private store: Store<AppState>) {}

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(RemoveNoteDialog, {
      data: { id },
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  ngOnInit() {}
}
