import { Component, OnInit, Input } from "@angular/core";

import { Store } from "@ngrx/store";
import { AppState } from "./../../app.state";
import * as NoteActions from "./../../actions/note.actions";

@Component({
  selector: "app-remove-note",
  templateUrl: "./remove-note.component.html",
  styleUrls: ["./remove-note.component.css"]
})
export class RemoveNoteComponent implements OnInit {
  @Input() id: string;

  constructor(private store: Store<AppState>) {}

  removeNote(id) {
    console.log(`Remove note with id ${id}`);
    this.store.dispatch(new NoteActions.RemoveNote(id));
  }

  ngOnInit() {}
}
