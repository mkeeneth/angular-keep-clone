import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RemoveNoteComponent } from "./remove-note.component";

import { MatDialogModule } from "@angular/material";

import { StoreModule } from "@ngrx/store";
import { reducer } from "../../reducers/note.reducer";

describe("RemoveNoteComponent", () => {
  let component: RemoveNoteComponent;
  let fixture: ComponentFixture<RemoveNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveNoteComponent],
      imports: [StoreModule.forRoot({ notes: reducer }), MatDialogModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
