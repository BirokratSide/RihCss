import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStatusEntryComponent } from './server-status-entry.component';

describe('ServerStatusEntryComponent', () => {
  let component: ServerStatusEntryComponent;
  let fixture: ComponentFixture<ServerStatusEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerStatusEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStatusEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
