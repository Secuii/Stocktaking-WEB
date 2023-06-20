export class Pagination
{
    public currentPage : number;
    public currentSize : number;
    public totalCount : number;
    public totalPages : number;

    public hasPreviousPage : boolean;
    public hasNextPage : boolean;
    public previousPage : number;
    public nextPage : number;

    public constructor()
    {
        this.currentPage = -1;
        this.currentSize = -1;
        this.totalCount = -1;
        this.totalPages = -1;

        this.hasPreviousPage = false;
        this.hasNextPage = false;
        this.previousPage = 1;
        this.nextPage = 1;
    }
    
}