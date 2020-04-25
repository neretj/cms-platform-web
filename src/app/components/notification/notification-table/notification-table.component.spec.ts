import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTableComponent } from './notification-table.component';

describe('NotificationTableComponent', () => {
  let component: NotificationTableComponent;
  let fixture: ComponentFixture<NotificationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
