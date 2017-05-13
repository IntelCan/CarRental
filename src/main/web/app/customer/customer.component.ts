import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from "./customer.service";

interface MessageJson {
    id: any;
    name: string;
    surname: string;
    age: number;
    identityCard: string;
    driverLicense: string;
    phone: string;
}


@Component({
    selector: 'customer',
    templateUrl: 'app/customer/customer.component.html',
    styleUrls: ['css/home.css'],
    providers: [CustomerService]
})
export class CustomerComponent implements OnInit,OnDestroy{

    private jsonResponse: string;
    private messages: Array<MessageJson>;
    private _subscription;

    constructor(private _userService: CustomerService) {}

    ngOnInit(){
        this._subscription = this._userService.getCustomers()
            .subscribe(
                (data) => {
                    //this.jsonResponse = JSON.stringify(data);
                    this.messages = data;
                },
                (err) => console.log(err),
                () => console.log('hello service test complete')
            );

    }

    ngOnDestroy(){
        this._subscription.unsubscribe();
    }

}
