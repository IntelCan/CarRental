import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AlertModule, DatepickerModule} from 'ng2-bootstrap/ng2-bootstrap';

import {routing, appRouterProviders} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from "./customer/customer.component";
import {CarComponent} from "./car/car.component";
import {RentalComponent} from "./rental/rental.component";
import {RentedCarComponent} from "./rentedCar/rentedCar.component";
import {AddCarComponent} from "./addCar/addCar.component";
import {AddCustomerComponent} from "./addCustomer/addCustomer.component";
import {CustomerDetailsComponent} from "./customerDetails/customerDetails.component";
import {LoginComponent} from './login/login.component';
import {LoginSuccess} from './login/login-success.component';
import {ToasterModule} from 'angular2-toaster';
import {ToasterService} from 'angular2-toaster';
import {LoginSuccess} from './login/login-success.component';
import {LoginService} from "./login/login.service";
import {AuthGuard} from "./app.auth-guard.service";

@NgModule({
    declarations: [AppComponent,
        HomeComponent,
        CustomerComponent,
        CarComponent,
        RentalComponent,
        RentedCarComponent,
        AddCarComponent,
        AddCustomerComponent,
        CustomerDetailsComponent,
        LoginComponent,
        LoginSuccess
    ],
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AlertModule,
        DatepickerModule,
        ToasterModule,
        routing],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        AuthGuard,
        ToasterService,
        LoginService,
        appRouterProviders,
        [{provide: APP_BASE_HREF, useValue: '/'}],
        [{provide: LocationStrategy, useClass: HashLocationStrategy}]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
