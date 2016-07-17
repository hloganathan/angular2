export class User {
    public id : number = 0;
    public username : string = '';
    public lastname : string = '';
    public firstname : string = '';
    public password : string = '';

    public EraseIdentity(){
        this.id = 0;
        this.username = '';
        this.lastname = '';
        this.firstname = '';
        this.password = '';
    }

    public DisplayName(){
        return this.firstname + ' ' + this.lastname;
    }

}
