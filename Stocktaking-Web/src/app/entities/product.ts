import { Type } from './type';

export class Product 
{
    public id: number;
    public name: String;
    public description: String;
    public stock: number;
    public type: Type | undefined;
  
    constructor() 
    {
      this.id = -1;
      this.name = "";
      this.description = ""
      this.stock = 0;
      this.type = undefined;
    }
  }