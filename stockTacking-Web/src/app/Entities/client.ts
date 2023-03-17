export class Client
{
    id : Number|null;

    name : string;
    lastName : string;
    secondLastName : string|null;
    age : number|null;

    constructor()
    {
        this.id = null;
        this.name = "";
        this.lastName = "";
        this.secondLastName = null;
        this.age = null;
    }
}