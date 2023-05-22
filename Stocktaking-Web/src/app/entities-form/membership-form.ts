export class MembershipForm {

    public id?: number;
    public name: String;
    public description : string;
    public price: number;

    constructor (){
       this.id = undefined;
       this.name = "";
       this.description = ""
       this.price = 0;
    }
}