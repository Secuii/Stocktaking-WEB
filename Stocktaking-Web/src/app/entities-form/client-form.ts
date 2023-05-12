export class ClientForm 
{
    public id?: number;
    public name : string;
    public lastName : string;
    public secondLastName : string;
    public age : number;

    constructor ()
    {
       this.id = undefined;
       this.name = "";
       this.lastName ="";
       this.secondLastName ="";
       this.age =0;
    }
}