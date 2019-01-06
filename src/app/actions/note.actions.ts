import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Note } from "./../models/note.model";

export const ADD_NOTE = "[NOTE] Add";
export const REMOVE_NOTE = "[NOTE] Remove";

export class AddNote implements Action {
  readonly type = ADD_NOTE;

  constructor(public payload: Note) {}
}

export class RemoveNote implements Action {
  readonly type = REMOVE_NOTE;

  constructor(public payload: number) {}
}

export type Action = AddNote | RemoveNote;
