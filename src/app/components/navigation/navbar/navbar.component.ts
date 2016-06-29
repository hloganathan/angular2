import { Component } from '@angular/core';
import { Authentication } from '../../../services/authentication';
import { User } from '../../../models';
import { UserDropdownComponent, LoginComponent } from '../../../components';

@Component({
    selector: 'hj-navbar',
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    directives: [LoginComponent, UserDropdownComponent]

})
export class NavbarComponent {
    public user: User = new User();
    private _authSrvc: Authentication;

    constructor(authSrvc: Authentication) {
        this._authSrvc = authSrvc;
        this.user = this._authSrvc.currentUser;
        this._authSrvc.userChanged$.subscribe(u => this.user = u);
    }

    logoutUser() {
        this._authSrvc.logoutUser();
    }

}