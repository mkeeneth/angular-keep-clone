import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note.model';

import { NgForm } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './../../../app.state';
import * as NoteActions from './../../../actions/note.actions';

@Component({
  selector: 'app-update-note-form',
  templateUrl: './update-note-form.component.html',
  styleUrls: ['./update-note-form.component.css'],
})
export class UpdateNoteFormComponent implements OnInit {
  @Input() note: Note;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.warn(f.value);
    this.updateNote(f.value['id'], f.value['title'], f.value['body']);
  }

  updateNote(id, title, body) {
    console.warn(id, title, body);
    this.store.dispatch(new NoteActions.UpdateNote({ id, title, body }));
  }
}
