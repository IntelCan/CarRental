import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Created by intelcan on 13.05.17.
 */

@Injectable()
export class CustomerService{

    constructor(private _http: Http) {}

    getCustomers() {
        return this._http.get('/api/customer/dto/all')
            .map((res:Response) => res.json());
    }

}
