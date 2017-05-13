import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'hello', component: HelloComponent},
    {path: 'customer', component: CustomerComponent},
];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
