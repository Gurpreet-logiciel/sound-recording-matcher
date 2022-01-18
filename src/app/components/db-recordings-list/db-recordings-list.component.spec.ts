import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbRecordingsListComponent } from './db-recordings-list.component';

describe('DbRecordingsListComponent', () => {
  let component: DbRecordingsListComponent;
  let fixture: ComponentFixture<DbRecordingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbRecordingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbRecordingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
