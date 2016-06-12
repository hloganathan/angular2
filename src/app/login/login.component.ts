import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Authentication } from '../services/authentication';

@Component({
    selector: 'de-login',
    templateUrl: './login/login-component.html',
    styleUrls: ['./login/login-component.css']
})

export class LoginComponent implements OnInit {
    username: string;
    status: string;
    
    constructor(private _authSrvc: Authentication){
        
    }
    tryLogin(){
        this._authSrvc.tryLogin(this.username);
    }
    
    ngOnInit(): any{
        this.status = 'not logged in';
    }
}