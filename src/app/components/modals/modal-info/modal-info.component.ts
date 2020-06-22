import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from 'src/app/services/product/product.service';
import { catchError, finalize } from "rxjs/operators";
import { of } from 'rxjs';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent {

  isLoading = false;

  constructor(public dialogRef: MatDialogRef<ModalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.isLoading = true;
    this.data.onOkClick(this.data.model).pipe(
    ).subscribe(
      (data: any) => {
        this.isLoading = false;
        this.dialogRef.close();
      },
      (error) => {
        this.isLoading = false;
        this.dialogRef.close();
      });
  }
}
