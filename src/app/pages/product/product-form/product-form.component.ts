import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { UserUtil } from 'src/app/helpers/user.util';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  errorMessage = '';

  constructor(private productService: ProductService, private userUtil: UserUtil) { }

  ngOnInit() {
  }

  uploadImage() {
    
  }

  onSubmit() {
    const user = this.userUtil.getUser();
    this.form.shop = user.shop;
    this.form.creationDate = new Date();
    this.productService.save(this.form).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
      },
      (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
