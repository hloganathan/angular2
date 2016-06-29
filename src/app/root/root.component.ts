import { Component, OnInit } from '@angular/core';
import { Authentication } from '../services/authentication';
import { User } from '../models';
import { UserDropdownComponent, LoginComponent } from '../components';

@Component({
    selector: 'hj-root',
    moduleId: module.id,
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.css'],
    directives: [LoginComponent, UserDropdownComponent]
})

export class RootComponent implements OnInit{
    title: string = 'Angular 2 Data Entry - App';
    user: User;
    private _authSrvc: Authentication;
    
    constructor(authSrvc: Authentication){
        this._authSrvc = authSrvc;
        this.user = this._authSrvc.currentUser;
        this._authSrvc.userChanged$.subscribe(u => this.user = u);
    }
    
    ngOnInit(){
    }
    
    logoutUser(){
        this._authSrvc.logoutUser();
    }
}