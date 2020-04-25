import { NgModule } from '@angular/core';


import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { MaterialModule } from '../material.module';
import { MaterialComponentsModule } from '../pages/material-component/material.module';
import { AuthInterceptor } from '../helpers/auth.interceptor';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { NotificationTableComponent } from './notification/notification-table/notification-table.component';

@NgModule({
    declarations: [
        ProductListComponent,
        OrderListComponent,
        NotificationListComponent,
        NotificationTableComponent
    ],
    exports: [
        ProductListComponent,
        OrderListComponent,
        NotificationListComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MaterialComponentsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [{
        provide: ErrorStateMatcher,
        useClass: ShowOnDirtyErrorStateMatcher,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }]
})
export class ComponentsModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
