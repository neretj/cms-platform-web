import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNotificationsComponent } from './menu-notifications.component';

describe('MenuNotificationsComponent', () => {
  let component: MenuNotificationsComponent;
  let fixture: ComponentFixture<MenuNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
