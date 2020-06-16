import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { MaterialModule } from 'src/app/material.module';
import { DashboardSalesComponent } from './dashboard-sales/dashboard-sales.component';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { DashboardViewsComponent } from './dashboard-views/dashboard-views.component';
import { DashboardOrdersComponent } from './dashboard-orders/dashboard-orders.component';
import { DateAgoPipe } from 'src/app/helpers/date-ago.pipe';
import { DashboardNotificationsComponent } from './dashboard-notifications/dashboard-notifications.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSalesComponent,
    DashboardViewsComponent,
    DashboardOrdersComponent,
    DateAgoPipe,
    DashboardNotificationsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,
    ComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
    }),
    RouterModule.forChild(DashboardRoutes)
  ]
})
export class DashboardModule { }
