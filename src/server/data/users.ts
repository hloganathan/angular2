/* tslint:disable:quotemark */
export const users =
    [
        {"id": 1, "username": "dmartin",  "lastname": "Martin", "firstname": "David", "password": "dude"},
        {"id": 2, "username": "neckman",  "lastname": "Gregg", "firstname": "Scott", "password": "neckman"},
        {"id": 3, "username": "jvaughan3","lastname": "Vaughan", "firstname": "Jim", "password": "6kids"},
        {"id": 4, "username": "firstpres","lastname": "Washington", "firstname": "George", "password": "1776"}
    ];
/*
import { DbConnection } from './connection';
import * as mongoose from 'mongoose';
import { User } from '../../shared/models';

export class Users{
    public static GetAll(): User[]{
        mongoose.connect('mongodb://localhost/healthjournal');
        let userSchema = new mongoose.Schema(User);
        let user = mongoose.model('User', userSchema);
        let 
        return null;
    }
}
*/