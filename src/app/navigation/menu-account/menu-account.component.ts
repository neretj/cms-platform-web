import { Component, OnInit } from '@angular/core';
import { UserUtil } from 'src/app/helpers/user.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-account',
  templateUrl: './menu-account.component.html',
  styleUrls: ['./menu-account.component.css']
})
export class MenuAccountComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private router: Router, private userUtil: UserUtil) { }

  ngOnInit() {
    this.isLoggedIn = this.userUtil.isLoggedInFn();
    if (this.isLoggedIn) {
      const user = this.userUtil.getUser();
      this.username = user.username;
    }
  }

  logout() {
    this.userUtil.signOut();
    this.router.navigate(['/login']);
  }
}
