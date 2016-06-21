export class User {
    username: string = 'no one';
    firstName: string ='';
    lastName: string = '';
    isValid: boolean = false;
    role: string = 'none';
    get fullname(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}