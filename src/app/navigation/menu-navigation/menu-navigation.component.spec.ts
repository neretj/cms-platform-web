import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavigationComponent } from './menu-navigation.component';

describe('MenuNavigationComponent', () => {
  let component: MenuNavigationComponent;
  let fixture: ComponentFixture<MenuNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
