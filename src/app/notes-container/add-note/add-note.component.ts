import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./../../app.state";
import * as NoteActions from "./../../actions/note.actions";
@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.css"]
})
export class AddNoteComponent implements OnInit {
  show: boolean = false;

  noteForm = this.fb.group({
    title: ["", Validators.required],
    body: ["", Validators.required]
  });

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.noteForm.value);
    this.addNote(this.noteForm.value["title"], this.noteForm.value["body"]);
  }

  addNote(title, body) {
    const randomId: number = Math.trunc(Math.random() * 10000000000);
    this.store.dispatch(new NoteActions.AddNote({ id: randomId, title, body }));
    this.show = false;
    this.noteForm.reset();
  }
}
