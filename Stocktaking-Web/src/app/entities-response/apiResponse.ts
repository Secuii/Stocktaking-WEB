import { MessageResult } from "../enums/messageResult";
import { Metadata } from "./metadata"

export class ApiResponse <T>
{
    public response : T | undefined
    public metadata : Metadata;
    public messageResult : MessageResult;

    public constructor()
    {
        this.response = undefined;
        this.metadata = new Metadata();
        this.messageResult = MessageResult.Error;
    }
}