import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {ToasterContainerComponent} from 'angular2-toaster';
import {ToastConfigurerFactory} from "../util/toast/toast-configurer.factory";


@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',
    directives: [ToasterContainerComponent]
})
export class LoginComponent {

    constructor(
        private loginService: LoginService,
        private router: Router) {
    }

    private toasterConfig = ToastConfigurerFactory.basicToastConfiguration();

    private myBan = {
        dateEndOfBan: '',
        timeEndOfBan: ''
    };

    //username and password
    credentials = {
        username: '',
        password: ''
    };

    errorEncountered = false;
    private statusBan: String;
    private role: String;
    private isAccountEnabled = true;

    //user selects if he wants to be allways logged
    private shouldBeRemembered: boolean;

    private countUnreadMessages = {
        count: ''
    };
    private countUnreadNotifications = {
        count: ''
    };

    /**
     * First, we check if user account is enabled(user has clicked on activation link), if not print error.
     * If account is enabled then
     * we do post on /auth and get a token
     * token is preserved in browser local storage
     * then if login has been positive we check role of user and
     * is not an banned account
     */
    logins(credentials): void {
        //check if account is enabled
        this.loginService
            .getToken(credentials, this.shouldBeRemembered)
            .subscribe(result => {
                if (result === true) {
                    this.credentials = {
                        username: '',
                        password: ''
                    };

                    this.errorEncountered = false;
                    this.isAccountEnabled = true;
                    //forwards to success page
                    this.router.navigate(['/login/success']);
                } else {
                    this.errorEncountered = true;
                }

                this.loginService.isLogged();
            }, error => {
                this.errorEncountered = true;
            });
    }

}
