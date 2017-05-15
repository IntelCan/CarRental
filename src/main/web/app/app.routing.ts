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

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'car', component: CarComponent},
    {path: 'rental/:id', component: RentalComponent},
    {path: 'rentedCar', component: RentedCarComponent},
    {path: 'addCar', component: AddCarComponent},
    {path: 'addCustomer', component: AddCustomerComponent},
    {path: 'customerDetails/:id', component: CustomerDetailsComponent},
];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
