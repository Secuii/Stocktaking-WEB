import { ProductService } from './../../../services/product.service';
import { Router } from '@angular/router';
import { Product } from './../../../entities/product';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list-products-component',
  templateUrl: './list-products-component.component.html',
  styleUrls: ['./../../components.css'],
  providers: [ProductService, Router]
})
export class ListProductsComponentComponent implements OnInit, OnDestroy{

   /*
        Variales:
    */
        public allDatas: Product[];
    /*
        Constructor
    */
    constructor
    (
        private productService : ProductService,
        private router: Router
    )
    {
        this.allDatas=[];
    }

    ngOnInit(): void 
    {
        this.productService.findProducts().subscribe
        (
            response =>
            {
                this.allDatas = response;
            }
        )
    }
    ngOnDestroy(): void 
    {
    }
    

  /*
      Métodos de enrutamiento
  */

  public mainPageBtn() {
    this.router.navigateByUrl('/home');
  }

  public showMoreBtn(id: number): void
  {
      // Ir a la página de detalle del id
     // this.router.navigate(['card', id]);
  }

  public showEditBtn() {
      // Ir a la página de detalle del id
     // this.router.navigate(['update', id]);
  }

  public showUsersBtn() {
    // Ir a la página de detalle del id
   // this.router.navigate(['products', id]);
  }

  /*
      Métodos de orden de los datos
  */
  public orderById() : void
  {
     /* this.productService.readAllProductsById().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      ) */
  }

  public orderByName() : void
  {
     /* this.productsService.readAllProductsByName().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }

  public orderByStock() : void
  {
     /* this.productService.readAllProductsByStock().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }

}
