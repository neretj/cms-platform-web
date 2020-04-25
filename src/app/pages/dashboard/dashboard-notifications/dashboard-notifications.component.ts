import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-notifications',
  templateUrl: './dashboard-notifications.component.html',
  styleUrls: ['./dashboard-notifications.component.scss']
})
export class DashboardNotificationsComponent implements OnInit {

  size: number = 3;
  displayedColumns = ['type', 'description', 'creationDate'];

  constructor() { }

  ngOnInit() {
  }

}
