import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component'
import {CarComponent} from "./car/car.component";
import {RentalComponent} from "./rental/rental.component";
import {RentedCarComponent} from "./rentedCar/rentedCar.component";
import {AddCarComponent} from "./addCar/addCar.component";
import {AddCustomerComponent} from "./addCustomer/addCustomer.component";
import {CustomerDetailsComponent} from "./customerDetails/customerDetails.component";
import { LoginComponent } from './login/login.component';
import {LoginSuccess} from './login/login-success.component';
import {AuthGuard} from "./app.auth-guard.service";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'customer', component: CustomerComponent, canActivate: [AuthGuard]},
    {path: 'car', component: CarComponent, canActivate: [AuthGuard]},
    {path: 'rental/:id', component: RentalComponent, canActivate: [AuthGuard]},
    {path: 'rentedCar', component: RentedCarComponent, canActivate: [AuthGuard]},
    {path: 'addCar', component: AddCarComponent, canActivate: [AuthGuard]},
    {path: 'addCustomer', component: AddCustomerComponent, canActivate: [AuthGuard]},
    {path: 'customerDetails/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'login/success', component: LoginSuccess},
];

export const appRouterProviders: any[] = [AuthGuard];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
