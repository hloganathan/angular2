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