import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AddNoteComponent } from "./add-note/add-note.component";
import { ViewNotesComponent } from "./view-notes/view-notes.component";
import { NotesContainerComponent } from "./notes-container.component";
import { MatMenuModule } from "@angular/material/menu";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { StoreModule } from "@ngrx/store";
import { reducer } from "../reducers/note.reducer";

describe("NotesContainerComponent", () => {
  let component: NotesContainerComponent;
  let fixture: ComponentFixture<NotesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesContainerComponent, AddNoteComponent, ViewNotesComponent],
      imports: [
        ReactiveFormsModule,
        MatMenuModule,
        StoreModule.forRoot({ notes: reducer }),
        BrowserAnimationsModule
      ],
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
