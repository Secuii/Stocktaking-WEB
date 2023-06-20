export class SupplierForm {


    public id?: number;
    public name: String;
    public email: String;
    public address: String;
    public description: String;

    constructor (){
       this.id = undefined;
       this.name = "";
       this.email = "";
       this.address = "";
       this.description = "";
    }
}