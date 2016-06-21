import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Authentication } from './services/authentication';
import { User } from './models/user';
import { UserDropdownComponent } from './components/user-dropdown.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app-component.html',
    styleUrls: ['app-component.css'],
    directives: [LoginComponent, UserDropdownComponent]
})

export class AppComponent implements OnInit{
    title: string = 'Angular 2 Data Entry - App';
    user: User;
    
    constructor(private _authSrvc: Authentication){
        this.user = _authSrvc.currentUser;
        _authSrvc.userChanged$.subscribe(u => this.user = u);
    }
    
    ngOnInit(){
    }
    
    logoutUser(){
        this._authSrvc.logoutUser();
    }
}