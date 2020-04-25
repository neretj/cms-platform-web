import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Order } from 'src/app/classes/order';
import { DateAgoPipe } from 'src/app/helpers/date-ago.pipe';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders = [];

  @Input()
  size: number;

  @Input()
  displayedColumns: string[];

  @Input()
  showPagination: boolean;

  dataSource: MatTableDataSource<Order>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private orderService: OrderService, private dateAgoPipe: DateAgoPipe) {
  }

  ngOnInit() {
    this.orderService.getLastOrders().subscribe((data: any[]) => {
      console.log(data);
      this.orders = data;
      this.dataSource = new MatTableDataSource(this.orders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  parseDate(date: string) {
    return this.dateAgoPipe.transform(date);
  }

  getTooltipMsg(status: string) {
    if (status === 'COMPLETED') {
      return 'The order is completed';
    }
    if (status === 'PENDING') {
      return 'The order is still pending';
    }
    if (status === 'CANCELED') {
      return 'The order is canceled';
    }
  }
}
