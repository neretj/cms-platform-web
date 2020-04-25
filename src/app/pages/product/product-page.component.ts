import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  products = [];
  displayedColumns = ['id', 'name', 'price', 'creationDate', 'store', 'category', 'isActive'];

  dataSource: MatTableDataSource<Product>;

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
    this.productService.getAllProducts(this.page, this.size).subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
