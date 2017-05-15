import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Rental} from "./rental";
/**
 * Created by intelcan on 14.05.17.
 */

@Injectable()
export class RentalService{

    private url;

    constructor(private _http: Http) {}

    private headers = new Headers({
        'accept': 'application/json',
        'content-type' : 'application/json'});

    getCar(id: number){

        return this._http.get('/api/car/'+id)
            .map(res => res.json());
    }

    getCustomer(ic: string){
        return this._http.get('/api/customer/ic/'+ic)
            .map(res => res.json());
    }
    createRental(data): Observable<Rental>{
        return this._http.post('api/rental/create',JSON.stringify(data),{headers :this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    setStatusRented(data): Observable<Rental>{
        return this._http.put('api/car/rent/'+data.id,JSON.stringify(data),{headers :this.headers})
            .map(res=>res.json())
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in rental', error);
        return Promise.reject(error.message || error);
    }
}
