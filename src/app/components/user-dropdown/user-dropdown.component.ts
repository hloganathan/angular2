import { Component } from '@angular/core';
import { AuthenticationService } from '../../services';
import { IUser } from '../../../shared/models';

@Component({
    selector:'hj-user-dropdown',
    moduleId: module.id,
    templateUrl: 'user-dropdown.component.html',
    styleUrls: ['user-dropdown.component.css']
})
export class UserDropdownComponent{
    private authService_: AuthenticationService;

    public user: IUser;
    public username: string;

    constructor(auth: AuthenticationService){
        this.authService_ = auth;
        this.user = this.authService_.currentUser;
        this.authService_.userChanged$.subscribe(this.userLoggedin);
    }

    public logoutUser(){
        this.authService_.logoutUser();
    }

    private userLoggedin(user: IUser){
        this.user = user;
    }
}