import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from "./car.service";

interface MessageJson {
    id: any;
    mark: string;
    model: string;
    rate: number;
    price: string;
    isRented: Boolean;
}


@Component({
    selector: 'car',
    templateUrl: 'app/car/car.component.html',
    styleUrls: ['css/home.css'],
    providers: [CarService]
})
export class CarComponent implements OnInit,OnDestroy{

    private jsonResponse: string;
    private messages: Array<MessageJson>;
    private _subscription;
    private dw: string;

    constructor(private _userService: CarService) {}

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
/**
 * Created by intelcan on 13.05.17.
 */
