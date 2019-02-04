import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNoteFormComponent } from './update-note-form.component';

describe('UpdateNoteFormComponent', () => {
  let component: UpdateNoteFormComponent;
  let fixture: ComponentFixture<UpdateNoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
