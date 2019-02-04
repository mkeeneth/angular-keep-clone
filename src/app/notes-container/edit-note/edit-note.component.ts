import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import * as NoteActions from './../../actions/note.actions';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
})
export class EditNoteComponent implements OnInit {
  @Input() id: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  editNote(id: number) {
    console.log(`Begin edit for note with id ${id}`);
    this.store.dispatch(new NoteActions.EditNote(id));
  }
}
