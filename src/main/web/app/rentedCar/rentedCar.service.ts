/**
 * Created by intelcan on 14.05.17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Created by intelcan on 13.05.17.
 */

@Injectable()
export class RentedCarService{

    constructor(private _http: Http) {}

    getCars() {
        return this._http.get('/api/car/all')
            .map((res:Response) => res.json());
    }

}