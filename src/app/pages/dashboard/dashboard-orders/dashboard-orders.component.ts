import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard-orders',
  templateUrl: './dashboard-orders.component.html',
  styleUrls: ['./dashboard-orders.component.scss']
})
export class DashboardOrdersComponent implements AfterViewInit {

  size: number = 10;
  displayedColumns = ['status', 'orderDate', 'totalAmount'];

  constructor() { }

  ngAfterViewInit() { }

  ngOnInit() {
  }

}
