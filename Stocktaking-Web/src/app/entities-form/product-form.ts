import { Type } from './../entities/type';

export class ProductForm {
    public id?: number;
    public name: String;
    public description: String;
    public stock?: number;
    public type: Type | undefined;

    constructor (){
       this.id = undefined;
       this.name = "";
       this.description = "";
       this.stock = 0;
       this.type = undefined;
    }
}

