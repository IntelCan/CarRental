import { Injectable, Inject } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {carAdd} from "./car";


@Injectable()
export class AddCarService{

    private headers = new Headers({
        'accept': 'application/json',
        'content-type' : 'application/json'});

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
