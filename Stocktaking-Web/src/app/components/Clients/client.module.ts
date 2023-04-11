import { NgModule } from "@angular/core";
import { ListClientComponentModule } from "./list-client-component/list-client-component.module";
import { CardClientComponentModule } from "./card-client-component/card-client-component.module";
import { UpdateClientComponentModule } from "./update-client-component/update-client-component.module";


@NgModule({
    declarations: [],
    imports: 
    [
      CardClientComponentModule,
      ListClientComponentModule,
      UpdateClientComponentModule
    ],
    exports: 
    [
        CardClientComponentModule,
        ListClientComponentModule,
        UpdateClientComponentModule
    ]
  })
  export class ClientComponentModule 
  { 
    
  }
  