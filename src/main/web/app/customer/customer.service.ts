import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {TokenHeaders} from "../util/token/TokenHeaders";

/**
 * Created by intelcan on 13.05.17.
 */

@Injectable()
export class CustomerService{

    private headers = TokenHeaders.createHeadersWithToken();

    constructor(private _http: Http) {}

    getCustomers() {
        return this._http.get('/api/customer/dto/all', {headers :this.headers})
            .map((res:Response) => res.json());
    }

}
