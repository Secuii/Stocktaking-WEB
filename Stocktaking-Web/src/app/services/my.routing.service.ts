import { Router } from '@angular/router';
import { Injectable } from "@angular/core";

Injectable()
export class MyRoutingService
{
    /*
        Métodos de orden de los datos
    */
    public reloadCurrentRoute(router : Router)
    {
        const currentUrl = router.url;

        router.navigateByUrl("/", {skipLocationChange : true}).then
        (
            () =>
            {
                router.navigate([currentUrl]);
            }
        )
    }
}