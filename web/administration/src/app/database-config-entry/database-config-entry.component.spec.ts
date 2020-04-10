import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseConfigEntryComponent } from './database-config-entry.component';

describe('DatabaseConfigEntryComponent', () => {
  let component: DatabaseConfigEntryComponent;
  let fixture: ComponentFixture<DatabaseConfigEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseConfigEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseConfigEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
