import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

export interface DialogData {
  message: string;
  id: number;
}

@Component({
  selector: "app-remove-dialog",
  templateUrl: "./remove-dialog.component.html",
  styleUrls: ["./remove-dialog.component.css"]
})
export class RemoveDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
