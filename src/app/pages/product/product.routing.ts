import { Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

export const ProductRoutes: Routes = [
	{
		path: '',
		component: ProductListComponent
	},
	{
		path: 'create',
		component: ProductFormComponent, data: {
			breadcrumb: 'New Product'
		}
	}
];
