import { Type } from './type';

export class product {
    public id: number;
    public name: String;
    public stock: number;
    public type: Type;
  
    constructor() {
      this.id = -1;
      this.name = "";
      this.stock = 0;
      this.type = new Type;
    }
  }