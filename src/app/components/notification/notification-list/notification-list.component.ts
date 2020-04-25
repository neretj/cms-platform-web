import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DateAgoPipe } from 'src/app/helpers/date-ago.pipe';
import { UserUtil } from 'src/app/helpers/user.util';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
notifTypes = {
    ALERT: 'ALERT',
    NEW_REGISTER: 'NEW_REGISTER',
    NEW_ORDER: 'NEW_ORDER',
    ACTION_PENDING: 'ACTION_PENDING'
  }

  notifications = [];

  @Input()
  size: number;

  @Input()
  displayedColumns: string[];

  @Input()
  showPagination: boolean;

  @Input()
  showHeader: boolean;

  userId: string;

  storeId: number;

  constructor(private notificationService: NotificationService, private dateAgoPipe: DateAgoPipe, private userUtil: UserUtil, ) {
    const user = userUtil.getUser();
    this.userId = user.id;
<<<<<<< HEAD
    this.storeId = user.shop.id;
=======
    this.storeId = user.storecom.id;
>>>>>>> f913468... new branch develop
  }

  ngOnInit() {
    this.notificationService.getOpenNotifications(this.storeId).subscribe((data: any[]) => {
      console.log(data);
      this.notifications = data;
    });
  }

  parseDate(date: string) {
    return this.dateAgoPipe.transform(date);
  }

}
