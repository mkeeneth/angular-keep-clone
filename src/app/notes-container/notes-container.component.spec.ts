import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AddNoteComponent } from "./add-note/add-note.component";
import { ViewNotesComponent } from "./view-notes/view-notes.component";
import { NotesContainerComponent } from "./notes-container.component";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("NotesContainerComponent", () => {
  let component: NotesContainerComponent;
  let fixture: ComponentFixture<NotesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesContainerComponent, AddNoteComponent, ViewNotesComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
