import { Component, OnInit, Renderer2 } from "@angular/core";
import { Note } from "../../models/note.model";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./../../app.state";

import * as marked from "marked";

import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-view-notes",
  templateUrl: "./view-notes.component.html",
  styleUrls: ["./view-notes.component.css"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("300ms ease-in", style({ transform: "translateY(0%)" }))
      ]),
      transition(":leave", [animate("200ms ease-in", style({ transform: "translateY(-100%)" }))])
    ])
  ]
})
export class ViewNotesComponent implements OnInit {
  notes$: Observable<Note[]>;

  constructor(private renderer: Renderer2, private store: Store<AppState>) {
    this.notes$ = store.pipe(select("notes"));
    marked.setOptions({ sanitize: true });
  }

  ngOnInit() {}

  render(text) {
    return marked(text);
  }
}
