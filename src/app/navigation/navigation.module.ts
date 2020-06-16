import { NgModule } from '@angular/core';


import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { AuthInterceptor } from '../helpers/auth.interceptor';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages/pages.module';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuAccountComponent } from './menu-account/menu-account.component';
import { MenuNotificationsComponent } from './menu-notifications/menu-notifications.component';
import { SubmenuComponent } from './submenu/submenu.component';

@NgModule({
    declarations: [
        MenuComponent,
        MenuNavigationComponent,
        MenuAccountComponent,
        MenuNotificationsComponent,
        SubmenuComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        PagesModule
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
export class NavigationModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
