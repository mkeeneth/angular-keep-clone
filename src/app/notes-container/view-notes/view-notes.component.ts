import { Component, OnInit } from "@angular/core";
import { NotesApiService } from "../../notes-api.service";
import { Note } from "../../note.model";

@Component({
  selector: "app-view-notes",
  templateUrl: "./view-notes.component.html",
  styleUrls: ["./view-notes.component.css"]
})
export class ViewNotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesapi: NotesApiService) {}

  ngOnInit() {
    this.notesapi.initNotes().subscribe(data => {
      console.log(data);
      this.notes = data as Note[];
    });
  }
}
