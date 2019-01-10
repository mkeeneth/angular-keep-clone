import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewNotesComponent } from "./view-notes.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { StoreModule } from "@ngrx/store";
import { reducer } from "../../reducers/note.reducer";

describe("ViewNotesComponent", () => {
  let component: ViewNotesComponent;
  let fixture: ComponentFixture<ViewNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewNotesComponent],
      imports: [StoreModule.forRoot({ notes: reducer }), BrowserAnimationsModule],
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
