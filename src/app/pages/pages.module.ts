import { NgModule } from '@angular/core';


import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from '../pages/home/home.component';
import { MaterialModule } from '../material.module';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { AuthInterceptor } from '../helpers/auth.interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MaterialComponentsModule } from './material-component/material.module';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
<<<<<<< HEAD
import { ComponentsModule } from '../components/components.module';
import { ProductModule } from './product/product.module';

@NgModule({
    declarations: [
        HomeComponent
=======
import { ProductPageComponent } from './product/product-page.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [
        HomeComponent,
        ProductPageComponent
>>>>>>> f913468... new branch develop
    ],
    imports: [
        RouterModule,
        CommonModule,
        PagesRoutingModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        DashboardModule,
        MaterialComponentsModule,
        ComponentsModule,
<<<<<<< HEAD
        ProductModule,
=======
>>>>>>> f913468... new branch develop
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
export class PagesModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
