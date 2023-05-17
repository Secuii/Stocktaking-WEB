import { Membership } from "../entities/membership";

export class UserForm {
    public id?: number;
    public name: string;
    public lastName: string;
    public email: string;
    public age: number;
    public password: string;
    public membership: Membership;

    constructor() {
        this.id = undefined;
        this.name = "";
        this.lastName = "";
        this.email = "";
        this.age = -1;
        this.password = "";
        this.membership = new Membership();
    }
}