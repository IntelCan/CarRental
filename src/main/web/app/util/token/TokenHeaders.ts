import {TokenUtils} from "../../login/token-utils";
import {Headers} from '@angular/http';

export class TokenHeaders {

    static createHeadersWithToken(): Headers {

        var currentToKey = JSON.parse(TokenUtils.getStoredToken());
        let token = currentToKey && currentToKey.token;

        //create appropriate
        return new Headers({
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Auth-token': token
        });
    }


}