import { Pagination } from "./Pagination";

export class Metadata
{
    public pagination : Pagination;

    public constructor()
    {
        this.pagination = new Pagination();
    }
}