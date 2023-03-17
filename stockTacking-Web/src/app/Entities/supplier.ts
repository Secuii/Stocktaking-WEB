export class Supplier
{
    id : Number|null;

    name : string;
    email : string;
    address : string;

    constructor()
    {
        this.id = null;
        this.name = "";
        this.email = "";
        this.address = "";
    }
}