import {Component, OnDestroy, OnInit} from '@angular/core';
import {AddCustomerService} from "./addCustomer.service";
import {Router} from "@angular/router";

@Component({
    selector: 'addCustomer',
    templateUrl: 'app/addCustomer/addCustomer.component.html',
    styleUrls: ['css/home.css'],
    providers: [AddCustomerService]
})
export class AddCustomerComponent implements OnInit,OnDestroy{

    private _subscription;

    private customerToAdd = {
        name: '',
        surname: '',
        age: '',
        identityCard: '',
        driverLicense: '',
        phone: ''
    };

    constructor(private _userService: AddCustomerService) {}

    ngOnInit(){

    }

    createCustomer(data){
        this.wyswietl(data)
     this._userService.createCustomer(data)
            .subscribe(
                result => {

                }
            );
    }
    wyswietl(data){
        console.log(data);
    }

    ngOnDestroy(){
    }

}

