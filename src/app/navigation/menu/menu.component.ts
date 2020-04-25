import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  sidenavToggle: any;

  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavToggle.toggle();
  }
}

