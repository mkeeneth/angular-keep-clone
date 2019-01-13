import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewNotesComponent } from "./view-notes.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";

import { StoreModule } from "@ngrx/store";
import { reducer } from "../../reducers/note.reducer";

describe("ViewNotesComponent", () => {
  let component: ViewNotesComponent;
  let fixture: ComponentFixture<ViewNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewNotesComponent],
      imports: [
        StoreModule.forRoot({ notes: reducer }),
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
