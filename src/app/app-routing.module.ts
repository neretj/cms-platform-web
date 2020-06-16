import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuNavigationComponent } from './navigation/menu-navigation/menu-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: MenuNavigationComponent,
    loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
