/**
 * Created by intelcan on 15.05.17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Created by intelcan on 14.05.17.
 */

@Injectable()
export class CustomerDetailsService{

    constructor(private _http: Http) {}

    getCustomer(id: number){
        return this._http.get('/api/customer/'+id)
            .map(res => res.json());
    }
}
