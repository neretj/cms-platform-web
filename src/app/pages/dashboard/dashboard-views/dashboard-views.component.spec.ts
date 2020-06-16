import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewsComponent } from './dashboard-views.component';

describe('DashboardViewsComponent', () => {
  let component: DashboardViewsComponent;
  let fixture: ComponentFixture<DashboardViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
