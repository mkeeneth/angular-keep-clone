import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Note } from "./note.model";

@Injectable({
  providedIn: "root"
})
export class NotesApiService {
  constructor(private http: HttpClient) {}
  initNotes() {
    // TODO: inject the ENV here for host/port
    return this.http.get("http://localhost:4200/assets/notes.json");
  }

  addNote(note: Note) {
    console.log(`Adding note: ${note}`);
  }
}
