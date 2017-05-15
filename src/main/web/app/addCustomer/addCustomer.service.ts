import { Injectable, Inject } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Customer} from "./customer";


@Injectable()
export class AddCustomerService{

    private headers = new Headers({
        'accept': 'application/json',
        'content-type' : 'application/json'});

    constructor(private _http: Http) {}

    createCustomer(data): Observable<Customer>{
        return this._http.post('/api/customer/create',JSON.stringify(data),{headers :this.headers})
            .map((res:Response) => res.json())
            .catch(this.handleError)
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred in create customer', error);
        return Promise.reject(error.message || error);
    }


}
