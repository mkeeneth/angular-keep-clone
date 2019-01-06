import { Component, OnInit } from "@angular/core";
import { Note } from "../../models/note.model";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./../../app.state";

@Component({
  selector: "app-view-notes",
  templateUrl: "./view-notes.component.html",
  styleUrls: ["./view-notes.component.css"]
})
export class ViewNotesComponent implements OnInit {
  notes$: Observable<Note[]>;

  // constructor(private store: Store<{ count: number }>) {
  // constructor(private store: Store<AppState>) {
  constructor(private store: Store<AppState>) {
    this.notes$ = store.pipe(select("notes"));
    console.log(this.notes$);
  }

  ngOnInit() {}
}
