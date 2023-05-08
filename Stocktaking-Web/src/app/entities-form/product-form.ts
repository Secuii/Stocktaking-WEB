import { Type } from './../entities/type';
export class ProductForm {
    public id?: number;
    public name: String;
    public stock?: number;
    public type: Type;

    constructor (){
       this.id = undefined;
       this.name = "";
       this.stock = undefined;
       this.type = new Type;
    }
}

