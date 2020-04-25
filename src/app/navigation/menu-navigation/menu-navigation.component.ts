import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { UserUtil } from 'src/app/helpers/user.util';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { MenuItems } from './menuitems';

@Component({
  selector: 'menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.scss']
})
export class MenuNavigationComponent implements OnInit {

  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  tokenStorageService: any;

  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  // overlap = false;

  expandedPadding = 'auto';
  collapsePadding = '50px';

  watcher: Subscription;
  
  @ViewChild('menusidenav', { static: false }) 
  menusidenav: MatSidenav;

  menuitems: any[];

  constructor(private userUtil: UserUtil, private router: Router, media: MediaObserver, mi: MenuItems) {
    this.watcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
    this.menuitems = mi.getRoutes();
  }

  ngOnInit() {
    this.isLoggedIn = this.userUtil.isLoggedInFn();    
  }
}
