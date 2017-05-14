/**
 * Created by intelcan on 14.05.17.
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import { RentedCarService} from "./rentedCar.service";


interface MessageJson {
    id: any;
    mark: string;
    model: string;
    rate: number;
    price: string;
    isRented: Boolean;
}


@Component({
    selector: 'rentedCar',
    templateUrl: 'app/rentedCar/rentedCar.component.html',
    styleUrls: ['css/home.css'],
    providers: [RentedCarService]
})
export class RentedCarComponent implements OnInit,OnDestroy{

    private jsonResponse: string;
    private messages: Array<MessageJson>;
    private _subscription;

    constructor(private _userService: RentedCarService) {}

    ngOnInit(){
        this._subscription = this._userService.getCars()
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

