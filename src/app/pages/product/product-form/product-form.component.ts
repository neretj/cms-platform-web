import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { UserUtil } from 'src/app/helpers/user.util';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  errorMessages = [];
  isLoading = false;

  categories = [];

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private productService: ProductService,
    private userUtil: UserUtil,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((data: any[]) => {
      this.categories = data;
    });
  }

  uploadImage() {

  }

  onTaxRateChange(change: string) {
    const taxrate = this.form.taxrate;
    const baseprice = this.form.priceWithoutTaxes;
    const totalprice = this.form.price;

    if (taxrate && taxrate > 0) {
      if (change !== 'baseprice' && totalprice && totalprice > 0) {
        this.form.priceWithoutTaxes = totalprice / (taxrate / 100 + 1);
      } else if (baseprice && baseprice > 0) {
        this.form.price = baseprice * (taxrate / 100 + 1);
      }
    }

  }

  onSubmit() {
    this.isLoading = true;
    const user = this.userUtil.getUser();
    this.form.shop = user.shop;
    this.form.creationDate = new Date();
    this.productService.save(this.form).subscribe(
      (data: any) => {
        this.isSuccessful = true;
        this.isLoading = false;
      },
      (err: { error: { message: string; }; }) => {
        this.isSuccessful = false;
        this.errorMessages.push(err.error.message);
        this.isLoading = false;
      }
    );
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Product Tags
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      if (!this.form.tags) this.form.tags = [];
      this.form.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: any): void {
    const index = this.form.tags.indexOf(tag);

    if (index >= 0) {
      this.form.tags.splice(index, 1);
    }
  }
}
