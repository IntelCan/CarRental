import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from "./customer.service";

interface MessageJson {
    id: any;
    name: string;
    surname: string;
    identityCard: string;
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
            );

    }

    ngOnDestroy(){
        this._subscription.unsubscribe();
    }

}
