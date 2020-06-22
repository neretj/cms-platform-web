import { NgModule } from '@angular/core';


import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { MaterialModule } from '../material.module';
import { MaterialComponentsModule } from '../pages/material-component/material.module';
import { AuthInterceptor } from '../helpers/auth.interceptor';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { NotificationTableComponent } from './notification/notification-table/notification-table.component';
import { ImageUploaderComponent } from './uploader/image-uploader-component/image-uploader.component';
import { ModalInfoComponent } from './modals/modal-info/modal-info.component';

@NgModule({
    declarations: [
        OrderListComponent,
        NotificationListComponent,
        NotificationTableComponent,
        ImageUploaderComponent,
        ModalInfoComponent
    ],
    exports: [
        OrderListComponent,
        NotificationListComponent,
        ImageUploaderComponent,
        ModalInfoComponent
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
    entryComponents: [
        ModalInfoComponent
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
