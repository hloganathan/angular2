import { Injectable } from '@angular/core';
import { Http, Response, Headers, HTTP_PROVIDERS } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {
    private _loggedOutUser = new User;
    private _userChangedSource = new Subject<User>();
    
    currentUser: User;
    userChanged$ = this._userChangedSource.asObservable();
    
    constructor(private _http: Http){
        this.currentUser = new User();
    }
    
    private completeLogin(data: any){
        let user = new User();

        if (data) {
            console.log(`result = ${data}`);
            //alert(`result = ${data.name}`);                
            user.username = data.username;
            user.firstName = data.firstname;
            user.lastName = data.lastname;
            user.isValid = true;
        }
        else{
            alert('invalid username/password');
        }
        
        this._changeUser(user);
    }
    tryLogin(username: string, password:string) {
        const url = 'http://localhost:3000/api/';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        this._http.get(`api/users?username=${username}&password=${password}`, { headers: headers })
            .map(res => { console.log(res); if(res.status === 200) return res.json(); return undefined})
            .subscribe((d:any) => this.completeLogin(d),
            (err) => { console.error(err); this.completeLogin(undefined); },
            ()=> console.log('done'));
    }
    
    getLoggedInUser(){
        return this.currentUser;
    }
    
    logoutUser(){
        this._changeUser(new User());
    }
    
    private _changeUser(user: User){
        this.currentUser = user;
        this._userChangedSource.next(user);
    }
}