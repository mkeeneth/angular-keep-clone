import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-edit-note",
  templateUrl: "./edit-note.component.html",
  styleUrls: ["./edit-note.component.css"]
})
export class EditNoteComponent implements OnInit {
  @Input() id: number;

  constructor() {}

  ngOnInit() {}

  editNote(id: number) {
    console.log(`Begin edit for note with id ${id}`);
  }
}
