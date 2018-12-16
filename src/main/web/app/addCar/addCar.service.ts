import {Injectable, Inject} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {carAdd} from "./car";
import {TokenHeaders} from "../util/token/TokenHeaders";


@Injectable()
export class AddCarService {

    private headers = TokenHeaders.createHeadersWithToken();

    constructor(private _http: Http) {}

    createCar(data): Observable<carAdd>{
        return this._http.post('/api/car/create',JSON.stringify(data),{headers :this.headers})
            .map((res:Response) => res.json())
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in create car', error);
        return Promise.reject(error.message || error);
    }


}
