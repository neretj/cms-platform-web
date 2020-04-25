import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ProductPageComponent } from './product/product-page.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'product', component: ProductPageComponent, data: {
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
