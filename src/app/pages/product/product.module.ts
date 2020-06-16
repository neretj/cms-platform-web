import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ProductRoutes } from './product.routing';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
	ProductFormComponent,
	ProductListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    RouterModule.forChild(ProductRoutes)
  ]
})
export class ProductModule { }
