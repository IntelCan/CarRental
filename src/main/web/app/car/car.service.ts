import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {TokenHeaders} from "../util/token/TokenHeaders";

/**
 * Created by intelcan on 13.05.17.
 */

@Injectable()
export class CarService{

    private headers = TokenHeaders.createHeadersWithToken();

    constructor(private _http: Http) {}

    getCars() {
        return this._http.get('/api/car/all', {headers :this.headers})
            .map((res:Response) => res.json());
    }

}
