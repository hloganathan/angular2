import * as mongoose from 'mongoose';

export interface IUser {
    username: string;
    firstName: string;
    lastName: string;
    isValid: boolean;
    role: string;
    fullname: string;
    password: string;
    id?: string | number;
}

/*
export class User {
    public username: string = 'no one';
    public firstName: string = '';
    public lastName: string = '';
    public isValid: boolean = false;
    public role: string = 'none';
    get fullname(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
*/

interface IUserModel extends IUser, mongoose.Document {}

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    isValid: Boolean,
    role: String,
    password: String
});

export const User = mongoose.model<IUserModel>('User', userSchema);
