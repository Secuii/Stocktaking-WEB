export class PermissionForm {
    public id?: number;
    public name: String;
    public description: String;

    constructor() {
        this.id = undefined;
        this.name = "";
        this.description = "";
    }
}