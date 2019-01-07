import { Action } from "@ngrx/store";
import { Note } from "./../models/note.model";
import * as NoteActions from "./../actions/note.actions";
import { TestNoteData } from "../../assets/notes";

// Section 2
export function reducer(state: Note[] = TestNoteData, action: NoteActions.Action) {
  // Section 3
  switch (action.type) {
    case NoteActions.ADD_NOTE:
      return [action.payload, ...state];
    case NoteActions.REMOVE_NOTE:
      return state.filter(x => x.id !== action.payload);
    default:
      return state;
  }
}
