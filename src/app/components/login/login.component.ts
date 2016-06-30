import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { AuthenticationService } from '../../services';

@Component({
    selector: 'hj-login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
    public status: string;
    private _fullstring: string;
    
    constructor(private _authSrvc: AuthenticationService){
        
    }

    tryLogin(){
        this._authSrvc.tryLogin(this.username, this.password);
    }
    
    ngOnInit(): any{
        this.status = 'not logged in';
    }
}