import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component'
import {CarComponent} from "./car/car.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'hello', component: HelloComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'car', component: CarComponent},
];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
