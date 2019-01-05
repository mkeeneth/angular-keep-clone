import { TestBed } from "@angular/core/testing";

import { NotesApiService } from "./notes-api.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("NotesApiService", () => {
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: NotesApiService = TestBed.get(NotesApiService);
    expect(service).toBeTruthy();
  });
});
