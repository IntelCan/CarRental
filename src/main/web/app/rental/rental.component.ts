import {Component, OnDestroy, OnInit} from '@angular/core';
import {RentalService} from "./rental.service";
import {ActivatedRoute} from "@angular/router";
import 'rxjs/Rx';

@Component({
    selector: 'rental',
    templateUrl: 'app/rental/rental.component.html',
    styleUrls: ['css/home.css'],
    providers: [RentalService]
})
export class RentalComponent implements OnInit,OnDestroy{

    private _subscription;
    private dw: string;
    private id: any;
    private sub: any;
    private url;

    private dataRentalToAdd = {
        idCustomer:'',
        idCar:'',
        timeRent:''
    };

    private car = {
        id:'',
        mark: '',
        model:'',
        rate: '',
        price:'',
        isRented:''
    };

    private customer = {
        id: '',
        name: '',
        surname: '',
        age: '',
        identityCard: '',
        driverLicense: '',
        phone: ''
    };

    private rental = {
        idCustomer:'',
        idCar:''
    };
    constructor(private route: ActivatedRoute, private _userService: RentalService) {}


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });

        this.getChoiceCar();


    }

    getChoiceCar():void{
        this._subscription = this._userService.getCar(this.id)
            .subscribe(
                (data) => {
                  this.car.id = data.id;
                  this.car.mark = data.mark;
                  this.car.model = data.model;
                  this.car.rate = data.rate;
                  this.car.price = data.price;
                  this.car.isRented = data.isRented;
                }
            );
    }

    getCustomerByIC():void{

        this._subscription = this._userService.getCustomer(this.dw)
            .subscribe(
                (data) => {
                    this.customer.id = data.id;
                    this.dataRentalToAdd.idCustomer =  this.customer.id;
                    this.customer.name = data.name;
                    this.customer.surname = data.surname;
                    this.customer.age = data.age;
                    this.customer.identityCard = data.identityCard;
                    this.customer.driverLicense = data.driverLicense;
                    this.customer.phone = data.phone;
                    this.createRental(this.dataRentalToAdd);
                }
            );

    }

    createRental(data): void{
        this.display(this.dataRentalToAdd);
        this._userService
            .createRental(data)
            .subscribe(newAccount => {
                this.dataRentalToAdd = {
                    idCustomer:'',
                    idCar:'',
                    timeRent:''
                };
                });
        this._userService.setStatusRented(this.car)
            .subscribe(result => {
                this.car = {
                    id:'',
                    mark: '',
                    model:'',
                    rate: '',
                    price:'',
                    isRented:''
                }

            });
    }


    public display(data2){
        this.dataRentalToAdd.idCar = this.id;
        console.log(data2);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}

