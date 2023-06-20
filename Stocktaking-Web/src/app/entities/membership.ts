export class Membership {
    public id: number;
    public name: String;
    public description : string;
    public price: number;
  
    constructor() {
        this.id = -1;
        this.name = "";
        this.description = ""
        this.price = 0;
    }
  }