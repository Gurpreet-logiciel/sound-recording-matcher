import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesRecordingListComponent } from './candidates-recording-list.component';

describe('CandidatesRecordingListComponent', () => {
  let component: CandidatesRecordingListComponent;
  let fixture: ComponentFixture<CandidatesRecordingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesRecordingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesRecordingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
