import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {
    private userChangedSource_ = new Subject<User>();
    private http_: Http;

    public currentUser: User;
    public userChanged$ = this.userChangedSource_.asObservable();

    constructor(http: Http){
        this.http_ = http;
        this.currentUser = new User();
    }

    public tryLogin(username: string, password:string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        this.http_.get(`api/users?username=${username}&password=${password}`, { headers: headers })
            .map(res => {
                console.log(res);
                if(res.status === 200) {
                    return res.json();
                }
                return undefined;
            })
            .subscribe((d:any) => this.completeLogin(d),
            (err) => {
                console.error(err);
                this.completeLogin(undefined);
            },
            ()=> console.log('done'));
    }

    public getLoggedInUser(){
        return this.currentUser;
    }

    public logoutUser(){
        this.changeUser_(new User());
    }

    private completeLogin(data: any){
        let user = new User();

        if (data) {
            user.username = data.username;
            user.firstName = data.firstname;
            user.lastName = data.lastname;
            user.isValid = true;
        }
        else{
            alert('invalid username/password');
        }

        this.changeUser_(user);
    }

    private changeUser_(user: User){
        this.currentUser = user;
        this.userChangedSource_.next(user);
    }
}