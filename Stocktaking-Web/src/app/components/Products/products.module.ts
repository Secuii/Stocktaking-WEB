import { NgModule } from "@angular/core";
import { CardProductsComponentModule } from "./card-products-component/card-products-component.module";
import { ListProductsComponentModule } from "./list-products-component/list-products-component.module";
import { UpdateProductsComponentModule } from "./update-products-component/update-products-component.module";


@NgModule({
    declarations: [],
    imports: [
        CardProductsComponentModule,
        ListProductsComponentModule,
        UpdateProductsComponentModule
    ],
    exports: [
        CardProductsComponentModule,
        ListProductsComponentModule,
        UpdateProductsComponentModule
    ]
  })
  export class ProductsComponentModule { }