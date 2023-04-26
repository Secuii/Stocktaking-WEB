import { HttpHeaders } from "@angular/common/http";

export class MyHttpService
{
    /*
        Método crear cabecera
        Objetivo:
        Entrada:
        Salida:
    */
    protected createHeader() : 
    {
        headers? : HttpHeaders |
        {
            [header: string] : string | string[];
        } | undefined
    }
    {
        const params =
        {
            headers: new HttpHeaders
            (
                {
                    'Content-Type' : 'application/json',
                    //'Authorization' : 'Bearer ' +localStorage.getItem("token")
                }
            )
        }

        return params;
    }
}