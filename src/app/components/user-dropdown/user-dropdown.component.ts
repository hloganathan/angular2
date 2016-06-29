import { Component } from '@angular/core';
import { Authentication } from '../../services';
import { User } from '../../models';

@Component({
    selector:'hj-user-dropdown',
    moduleId: module.id,
    templateUrl: 'user-dropdown.component.html',
    styleUrls: ['user-dropdown.component.css']
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