import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

const items = ['home', 'dashboard', 'product', 'material'];


@Injectable({
    providedIn: 'root'
})
export class MenuItems {

    routes: Route[];
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute) {
        this.routes = this.router.config;

    }

    getRoutes() {
        const list = this.routes.map( (i: any) => {
            const obj = {};
            const obj2 = {};
            obj2['name'] = i.data ? i.data.breadcrumb : i.path;
            obj2['href'] = `/${i.path}`;
            obj[i.path] = obj2;
            return obj;
        });
        const allroutes = [];
        items.forEach((item) => {
            allroutes.push(list[item]);
        });
        return allroutes;
    }
}
