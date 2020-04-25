import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Customer } from 'src/app/classes/customer';

@Component({
  selector: 'app-board-list-users',
  templateUrl: './board-list-users.component.html',
  styleUrls: ['./board-list-users.component.css']
})
export class BoardListUsersComponent implements OnInit {

  users = [];

  displayedColumns = ['id', 'firstName', 'lastName', 'country', 'city', 'details', 'update', 'delete'];
  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  page: number;
  size: number;
  pageSizeOptions: number;
  totalUsers: number;

  constructor(private userService: UserService) {
    this.page = 0;
    this.size = 6;
  }

  ngOnInit(): void {
    this.userService.getAllCustomers(this.page, 40).subscribe((data: any) => {
      console.log(data);
      this.users = data.list;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.totalUsers = data.total;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public redirectToDetails = (id: string) => {

  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (id: string) => {

  }

}
