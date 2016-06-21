import { Component } from '@angular/core';
import { Authentication } from '../services/authentication';
import { User } from '../models/user';

@Component({
    selector:'hj-user-dropdown',
    templateUrl: './components/user-dropdown.component.html',
    styleUrls: ['./components/user-dropdown.component.css']
})
export class UserDropdownComponent{
    user: User;
    username: string;
    
    constructor(private _auth: Authentication){
        this.user = _auth.currentUser;
        this._auth.userChanged$.subscribe(this.userLoggedin);
    }

    //get username(): string {
    //    return this._username.username;
    //}

    logoutUser(){
        this._auth.logoutUser();
    }

    private userLoggedin(user: User){
        this.user = user;
    }
}