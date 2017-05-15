/**
 * Created by intelcan on 14.05.17.
 */
import { Injectable, Inject } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import {Rental} from "../rental/rental";
import {Car} from "./car";
import 'rxjs/add/operator/map';

/**
 * Created by intelcan on 14.05.17.
 */

@Injectable()
export class RentedCarService{

    private headers = new Headers({
        'accept': 'application/json',
        'content-type' : 'application/json'});

    constructor(private _http: Http) {}

    getRentals() {
        return this._http.get('/api/rental/all')
            .map((res:Response) => res.json());
    }

    getOneCar(id): Observable<Car>{
        return this._http.get('/api/car/'+id, {headers : this.headers})
            .map(res =>  res.json())
            .catch(this.handleError);
    }

    returnCar(id: number){
        return this._http.delete('/api/rental/'+id, {headers : this.headers})
            .map( () => null)
            .catch(this.handleError);
    }
    setStatusNotRented(data): Observable<Car>{
        return this._http.put('api/car/return/'+data.id,JSON.stringify(data),{headers :this.headers})
            .map(res=>res.json())
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in RentedCar service', error);
        return Promise.reject(error.message || error);
    }

}
