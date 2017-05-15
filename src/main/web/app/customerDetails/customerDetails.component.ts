/**
 * Created by intelcan on 15.05.17.
 */
import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerDetailsService} from "./customerDetails.service";
import {ActivatedRoute} from "@angular/router";



@Component({
    selector: 'customerDetails',
    templateUrl: 'app/customerDetails/customerDetails.component.html',
    styleUrls: ['css/home.css'],
    providers: [CustomerDetailsService]
})
export class CustomerDetailsComponent implements OnInit,OnDestroy{

    private jsonResponse: string;
    private _subscription;
    private id: number
    private sub: any;
    private customer = {
        id: '',
        name: '',
        surname: '',
        age: '',
        identityCard: '',
        driverLicense: '',
        phone: ''
    };

    constructor(private route: ActivatedRoute,private _userService: CustomerDetailsService) {}

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });
        this.getCustomerById();

    }
    getCustomerById():void{

        this._subscription = this._userService.getCustomer(this.id)
            .subscribe(
                (data) => {
                    this.customer.id = data.id;
                    this.customer.name = data.name;
                    this.customer.surname = data.surname;
                    this.customer.age = data.age;
                    this.customer.identityCard = data.identityCard;
                    this.customer.driverLicense = data.driverLicense;
                    this.customer.phone = data.phone;
                }
            );

    }

    ngOnDestroy(){
        this._subscription.unsubscribe();
    }

}
