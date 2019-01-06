import { Note } from "./models/note.model";

export interface AppState {
  readonly notes: Note[];
}
