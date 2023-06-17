export class ProductAttribute
{
    public productId : number;
    public attributeId : number;
    public attributeName : string;
    public value : string;

    constructor()
    {
        this.productId = -404;
        this.attributeId = -404;
        this.attributeName = "";
        this.value = "";
    }
}