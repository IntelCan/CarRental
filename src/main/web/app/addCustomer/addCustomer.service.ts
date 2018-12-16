import { Injectable, Inject } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Customer} from "./customer";
import {TokenHeaders} from "../util/token/TokenHeaders";


@Injectable()
export class AddCustomerService{

    private headers = TokenHeaders.createHeadersWithToken();

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
