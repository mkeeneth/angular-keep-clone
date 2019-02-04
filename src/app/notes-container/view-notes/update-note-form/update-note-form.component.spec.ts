import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { UpdateNoteFormComponent } from './update-note-form.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from '../../../reducers/note.reducer';
import { Note } from 'src/app/models/note.model';

describe('UpdateNoteFormComponent', () => {
  let component: UpdateNoteFormComponent;
  let fixture: ComponentFixture<UpdateNoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNoteFormComponent],
      imports: [FormsModule, StoreModule.forRoot({ notes: reducer })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNoteFormComponent);
    component = fixture.componentInstance;
    component.note = new Note();
    component.note.id = 123;
    component.note.title = 'my title';
    component.note.body = 'my body';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
