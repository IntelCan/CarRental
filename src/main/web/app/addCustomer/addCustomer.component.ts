import {Component, OnDestroy, OnInit} from '@angular/core';
import {AddCarService} from "./addCar.service";
import {Router} from "@angular/router";

@Component({
    selector: 'addCar',
    templateUrl: 'app/addCar/addCar.component.html',
    styleUrls: ['css/home.css'],
    providers: [AddCarService]
})
export class AddCarComponent implements OnInit,OnDestroy{

    private _subscription;

    private carToAdd = {
        mark: '',
        model:'',
        rate: '',
        price:'',
        isRented:''
    };

    constructor(private _userService: AddCarService) {}

    ngOnInit(){

    }

    createCar(data){
        this.wyswietl(data)
     this._userService.createCar(data)
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

