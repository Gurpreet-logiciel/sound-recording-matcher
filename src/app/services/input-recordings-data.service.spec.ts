import { TestBed } from '@angular/core/testing';

import { InputRecordingsDataService } from './input-recordings-data.service';

describe('InputRecordingsDataService', () => {
  let service: InputRecordingsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputRecordingsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
