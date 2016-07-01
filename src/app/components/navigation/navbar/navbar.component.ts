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
    private authSrvc_: AuthenticationService;
    public user: User = new User();

    constructor(authSrvc: AuthenticationService) {
        this.authSrvc_ = authSrvc;
        this.authSrvc_.userChanged$.subscribe(u => this.user = u);
        this.user = this.authSrvc_.currentUser;
    }
}