import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { MatPaginator, MatSort } from '@angular/material';
import { ProductDataSource } from './product-datasource';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  displayedColumns = ['id', 'name', 'price', 'creationDate', 'store', 'category', 'isActive'];

  dataSource: ProductDataSource;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  page: number;
  size: number;
  pageSizeOptions: number;

  constructor(private productService: ProductService) {
    this.page = 0;
    this.size = 10;
  }

  ngOnInit() {
    this.dataSource = new ProductDataSource(this.productService);
    this.dataSource.loadTodos();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.counter$
      .pipe(
        tap((count) => {
          this.paginator.length = count;
        })
      )
      .subscribe();
 
    this.paginator.page
      .pipe(
        tap(() => this.loadTodos())
      )
      .subscribe();
  }
 
  loadTodos() {
    this.dataSource.loadTodos(this.paginator.pageIndex, this.paginator.pageSize);
  }

  public redirectToDetails = (id: string) => {

  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (id: string) => {

  }

}
