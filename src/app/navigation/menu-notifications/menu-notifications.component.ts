import { Component, OnInit } from '@angular/core';

const notifTypes = {
  ORDER: 'New Order',
  REGISTER: 'New Register',
  ALERT: 'Alert',
  ACTION: 'Action'
}

const status = {
  PENDING: 'Pending',
  BLOCKER: 'Blocker',
  PROGRESS: 'In progress',
  SOLVED: 'Solved'
}

const notifData = [
  { id: 1, type: notifTypes.ACTION, description: "A pending order needs your confirmation", status: status.PENDING, time: '1 hour ago' },
  { id: 2, type: notifTypes.ORDER, description: "New order received", status: status.BLOCKER, time: '2 hour ago' },
  { id: 3, type: notifTypes.REGISTER, description: "New customer has registered", status: status.PROGRESS, time: '4 hour ago' },
  { id: 4, type: notifTypes.ALERT, description: "Project has been approved", status: status.SOLVED, time: '5 hour ago' },
];

@Component({
  selector: 'app-menu-notifications',
  templateUrl: './menu-notifications.component.html',
  styleUrls: ['./menu-notifications.component.css']
})
export class MenuNotificationsComponent implements OnInit {

  notifications: any[];

  notifTypes = {
    ORDER: 'New Order',
    REGISTER: 'New Register',
    ALERT: 'Alert',
    ACTION: 'Action'
  };

  constructor() {
    this.notifications = notifData;
  }

  ngOnInit() {
  }

}
