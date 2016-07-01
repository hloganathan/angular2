import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services';

@Component({
    selector: 'hj-login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    private authService_: AuthenticationService;

    public username: string;
    public password: string;
    public status: string;

    constructor(authSrvc: AuthenticationService){
        this.authService_ = authSrvc;
    }

    public tryLogin(){
        this.authService_.tryLogin(this.username, this.password);
    }

    public ngOnInit(): any{
        this.status = 'not logged in';
    }
}