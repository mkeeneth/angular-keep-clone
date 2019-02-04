import { Action } from '@ngrx/store';
import { Note } from './../models/note.model';
import * as NoteActions from './../actions/note.actions';
import { TestNoteData } from '../../assets/notes';

export function reducer(state: Note[] = TestNoteData, action: NoteActions.Action) {
  switch (action.type) {
    case NoteActions.ADD_NOTE:
      return [action.payload, ...state];
    case NoteActions.EDIT_NOTE:
      return state.map(x =>
        x.id === action.payload
          ? {
              ...x,
              isEditing: true,
            }
          : x,
      );
    case NoteActions.CANCEL_EDIT_NOTE:
      return state.map(x =>
        x.id === action.payload
          ? {
              ...x,
              isEditing: false,
            }
          : x,
      );
    case NoteActions.UPDATE_NOTE:
      return state.map(x =>
        x.id === action.payload.id
          ? {
              ...action.payload,
              isEditing: false,
            }
          : x,
      );

    case NoteActions.REMOVE_NOTE:
      return state.filter(x => x.id !== action.payload);
    default:
      return state;
  }
}
