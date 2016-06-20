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
    password: string;
    private _fullstring: string;
    status: string;
    
    constructor(private _authSrvc: Authentication){
        
    }

    get fullstring(): string{
        return `${this.username} - ${this.password}`
    }
    tryLogin(){
        this._authSrvc.tryLogin(this.username);
    }
    
    ngOnInit(): any{
        this.status = 'not logged in';
    }
}