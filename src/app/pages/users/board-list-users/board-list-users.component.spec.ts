import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListUsersComponent } from './board-list-users.component';

describe('BoardListUsersComponent', () => {
  let component: BoardListUsersComponent;
  let fixture: ComponentFixture<BoardListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
