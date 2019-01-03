import { TestBed } from '@angular/core/testing';

import { NotesApiService } from './notes-api.service';

describe('NotesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesApiService = TestBed.get(NotesApiService);
    expect(service).toBeTruthy();
  });
});
