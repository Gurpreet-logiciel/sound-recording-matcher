import { TestBed } from '@angular/core/testing';

import { RecordingsDbService } from './recordings-db.service';

describe('RecordingsDbService', () => {
  let service: RecordingsDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordingsDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
