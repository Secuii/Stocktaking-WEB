import { Type } from './type';
export class Product
{
    id : Number|null;

    name : string;
    stock : number|null;
    type : number|null;

    constructor()
    {
        this.id = null;
        this.name = "";
        this.stock = null;
        this.type = null
    }
}