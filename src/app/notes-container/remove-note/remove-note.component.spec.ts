import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveNoteComponent } from './remove-note.component';

describe('RemoveNoteComponent', () => {
  let component: RemoveNoteComponent;
  let fixture: ComponentFixture<RemoveNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
