import { Component, OnInit, ViewChild, LOCALE_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { ProductDataSource } from './product-datasource';
import { tap, catchError, finalize } from 'rxjs/operators';
import { Product } from 'src/app/classes/product';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductUtil } from 'src/app/helpers/product.util';
import { ModalInfoComponent } from 'src/app/components/modals/modal-info/modal-info.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns = ['selector', 'id', 'name', 'price', 'creationDate', 'store', 'category', 'isActive', 'details', 'update'];

  products = [];
  dataSource: ProductDataSource;

  errorMessages = [];
  alertMessages = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /* Selection */
  private initialSelection = [];
  private allowMultiSelect = true;
  selection: SelectionModel<Product>;

  constructor(private productService: ProductService, @Inject(LOCALE_ID) public locale: string,
    private productUtil: ProductUtil, public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef,
    private _snackBar: MatSnackBar) {
    this.selection = new SelectionModel<Product>(this.allowMultiSelect, this.initialSelection);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.dataSource = new ProductDataSource(this.productService);
    this.dataSource.loadProducts();
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches  
    this.dataSource.filter = filterValue;
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
        tap(() => this.loadProducts())
      )
      .subscribe();
  }

  loadProducts() {
    this.clearMessages();
    this.dataSource.loadProducts(this.paginator.pageIndex, this.paginator.pageSize);
  }

  onRemoveProductDialog = () => {
    this.clearMessages();
    const selected = this.selection.selected;
    this.productService.removeProducts(selected).pipe(
    ).subscribe(
      (data: any) => {
        this.loadProducts();
        this.alertMessages.push(`The product(s) has been removed successfully:  ${selected.map((s) => s.id).toString()}`);
      },
      (error) => {
        this.errorMessages.push(`There is an error when removing the product(s):  ${selected.map((s) => s.id).toString()}`);
      });
    this.selection.clear();
  }

  removeProducts() {
    const dialogRef = this.dialog.open(ModalInfoComponent, {
      width: '250px',
      data: {
        title: "Remove Product",
        message: "Are you sure do you want to remove this product?",
        onOkClick: this.onRemoveProductDialog
      }
    });

  }

  public changeStatus = (id: number, status: boolean) => {
    let product = this.productUtil.getProductById(this.dataSource.data, id);
    if (product) {
      this.openChangeStatusDialog(id, status, product)
    }
  }

  public onChangeStatusDialog = (product: any) => {
    this.clearMessages();
    product.active = !product.active;
    return this.productService.updateProduct(product);
  }

  openChangeStatusDialog(id: number, status: boolean, product: Product): void {
    const dialogRef = this.dialog.open(ModalInfoComponent, {
      data: {
        title: "Change status",
        message: "Are you sure do you want to change the status?",
        model: product,
        onOkClick: this.onChangeStatusDialog
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this._snackBar.open("The status has been changed", "Close", {
        duration: 2000
      });
    });
  }

  clearMessages() {
    this.errorMessages = [];
    this.alertMessages = [];
  }
  public redirectToDetails = (id: string) => {

  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (id: string) => {

  }

}
