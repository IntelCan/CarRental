import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Rental} from "./rental";
import {TokenHeaders} from "../util/token/TokenHeaders";
/**
 * Created by intelcan on 14.05.17.
 */

@Injectable()
export class RentalService{

    private url;

    constructor(private _http: Http) {}

    private headers = TokenHeaders.createHeadersWithToken();

    getCar(id: number){

        return this._http.get('/api/car/'+id, {headers : this.headers})
            .map(res => res.json());
    }

    getCustomer(ic: string){
        return this._http.get('/api/customer/ic/'+ic, {headers : this.headers})
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
