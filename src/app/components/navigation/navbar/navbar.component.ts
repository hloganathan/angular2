import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthenticationService } from '../../../services';
import { User } from '../../../models';
import { UserDropdownComponent, LoginComponent } from '../../../components';
import { MainMenuComponent } from '../main-menu';

@Component({
    selector: 'hj-navbar',
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    directives: [ MainMenuComponent, LoginComponent, UserDropdownComponent, ROUTER_DIRECTIVES ]

})
export class NavbarComponent {
    public user: User = new User();
    private _authSrvc: AuthenticationService;

    constructor(authSrvc: AuthenticationService) {
        this._authSrvc = authSrvc;
        this.user = this._authSrvc.currentUser;
        this._authSrvc.userChanged$.subscribe(u => this.user = u);
    }

    logoutUser() {
        this._authSrvc.logoutUser();
    }

}