/**
 * Created by intelcan on 15.05.17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {TokenHeaders} from "../util/token/TokenHeaders";

/**
 * Created by intelcan on 14.05.17.
 */

@Injectable()
export class CustomerDetailsService{

    private headers = TokenHeaders.createHeadersWithToken();

    constructor(private _http: Http) {}

    getCustomer(id: number){
        return this._http.get('/api/customer/'+id, {headers :this.headers} )
            .map(res => res.json());
    }
}
