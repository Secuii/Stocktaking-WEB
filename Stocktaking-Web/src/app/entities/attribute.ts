import { Type_TypeValue } from "../enums/type_TypeValue";

export class Attribute {
    public id: number;
    public name: String;
    public description: String;
    public valueType : Type_TypeValue

    constructor() {
        this.id = -1;
        this.name = "";
        this.description = "";
        this.valueType = Type_TypeValue.String;
    }
}