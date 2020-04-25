import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
<<<<<<< HEAD
=======
import { ProductPageComponent } from './product/product-page.component';
>>>>>>> f913468... new branch develop

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
<<<<<<< HEAD
    path: 'product', 
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule), data: {
=======
    path: 'product', component: ProductPageComponent, data: {
>>>>>>> f913468... new branch develop
      breadcrumb: 'Products'
    }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      breadcrumb: 'Dashboard'
    }
  },
  {
    path: 'material',
    loadChildren: () => import('./material-component/material.module').then(m => m.MaterialComponentsModule),
    data: {
      breadcrumb: 'Material'
    }
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
