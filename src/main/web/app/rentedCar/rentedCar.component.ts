/**
 * Created by intelcan on 14.05.17.
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import { RentedCarService} from "./rentedCar.service";
import {Router} from "@angular/router";
import 'rxjs/Rx';


interface MessageJson {
    id: any;
    idCustomer: number;
    idCar: number;
    rentalDate: Date;
    timeRent: number;
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
    private idd: number;

    private car = {
        id:'',
        mark: '',
        model:'',
        rate: '',
        price:'',
        isRented:''
    };
    constructor(private _userService: RentedCarService, private router:Router) {}

    ngOnInit(){
        this._subscription = this._userService.getRentals()
            .subscribe(
                (data) => {
                    //this.jsonResponse = JSON.stringify(data);
                    this.messages = data;
                },
                (err) => console.log(err),
                () => console.log('hello service test complete')
            );

    }

    returnCar(id, idRental):void{
        this._userService.getOneCar(id)
            .subscribe(
                (data) => {
                    this.car.id = data.id;
                    this.car.mark = data.mark;
                    this.car.model = data.model;
                    this.car.rate = data.rate;
                    this.car.price = data.price;
                    this.car.isRented = data.isRented;
                    this.setStatusCar(id,idRental);
                    this.router.navigate(['/car']);
                }
            );

    }


    setStatusCar(data, data2):void {

        this._subscription = this._userService.returnCar(data2).subscribe();
        this._userService.setStatusNotRented(this.car)
            .subscribe(result =>{
                this.car = {
                    id:'',
                    mark: '',
                    model:'',
                    rate: '',
                    price:'',
                    isRented:''
                };
            });

    }

    wyswietl(data):void{
        console.log(data);
    }


    ngOnDestroy(){
        this._subscription.unsubscribe();
    }

}

