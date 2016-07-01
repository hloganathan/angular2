import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { NavbarComponent } from '../components/navigation/navbar';
import { AuthenticationService } from '../services';
import { User } from '../models';

@Component({
    selector: 'hj-root',
    moduleId: module.id,
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.css'],
    directives: [NavbarComponent, ROUTER_DIRECTIVES ]
})

export class RootComponent {
    private router_ : Router;
    private auth_ : AuthenticationService;
    private sub: any;

    public title: string = 'Angular 2 Data Entry - App';

    constructor(router: Router, auth: AuthenticationService){
        this.router_ = router;
        if(this.router_ === undefined){
            console.log('*** Router is undefined ***');
        }
        else {
            console.log('*** Router is defined ***');
        }
        this.auth_ = auth;
        this.sub = this.auth_.userChanged$.subscribe((u) => this.onUserChanged(u));
    }

    private onUserChanged(user: User){
        if(user.isValid){
            this.router_.navigate(['/desktop/dashboard']);
        }
        else {
            this.router_.navigate(['/welcome']);
        }
    }
}