import { Component } from '@angular/core';
import { Authentication } from '../services';
import { User } from '../models';

@Component({
    selector:'hj-user-dropdown',
    template:`
    <div class="navbar navbar-collapse collapse">
        <div class="dropdown navbar-form navbar-right">
            <button id="dropdownMenu1" class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="glyphicon glyphicon-user"></span>
                <span class="username">{{ user?.fullname }}</span>
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Account</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#" (click)="logoutUser()">Logout</a></li>
            </ul>
        </div>
    </div>
    `,
    styles:[`
        .username {
            margin: 0 6px;
        }
    `]
    //templateUrl: './components/user-dropdown.component.html',
    //styleUrls: ['./components/user-dropdown.component.css']
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