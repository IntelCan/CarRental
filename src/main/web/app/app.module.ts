import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { routing, appRouterProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from "./customer/customer.component";
import {CarComponent} from "./car/car.component";
import {RentalComponent} from "./rental/rental.component";
import {RentedCarComponent} from "./rentedCar/rentedCar.component";
import {AddCarComponent} from "./addCar/addCar.component";


@NgModule({
    declarations: [AppComponent,
                   HelloComponent,
                   HomeComponent,
                   CustomerComponent,
                   CarComponent,
                   RentalComponent,
                   RentedCarComponent,
                   AddCarComponent],
    imports: [BrowserModule,
              FormsModule,
              ReactiveFormsModule,
              HttpModule,
              AlertModule,
              DatepickerModule,
              routing],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        appRouterProviders,
        [{provide: APP_BASE_HREF, useValue: '/'}],
        [{provide: LocationStrategy, useClass: HashLocationStrategy}]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
