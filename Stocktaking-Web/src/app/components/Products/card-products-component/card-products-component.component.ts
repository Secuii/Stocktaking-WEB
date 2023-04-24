import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../../entities/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-products-component',
  templateUrl: './card-products-component.component.html',
  styleUrls: ['./../../components.css']
})
export class CardProductsComponentComponent implements OnInit {
    /*
     Variales:
 */
     public products: Product;
     public idProducts: number;
 /*
     Constructor
 */
 constructor(private router: Router,
             private activatedRoute: ActivatedRoute)
 {
     this.products= new Product();
     this.idProducts = 0;
 }

 
 /*
     Métodos implementados de interfaces:
 */
 ngOnInit(): void 
 {
     this.activatedRoute.params.subscribe
     (
         params => 
         {
             this.idProducts = params['id'];
         }
     );

     this.getProductsromIdService();
 }

/*
   Métodos de enrutamiento
*/

   public mainPageBtn() {
     this.router.navigateByUrl('/main');
   }

   public showUsersBtn() {
    // Ir a la página de detalle del id
   // this.router.navigate(['users', id]);
  }

   private getProductsromIdService(): void
   {
       /*this.ProductsService.readAProducts(this.idP).subscribe(
           response => 
           {
               this.Products = response;
           }
       )*/
   }

}
