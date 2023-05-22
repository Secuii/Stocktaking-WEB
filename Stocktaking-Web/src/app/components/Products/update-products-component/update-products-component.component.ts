import { Router } from '@angular/router';
import { MyRoutingService } from './../../../services/my.routing.service';
import { ProductService } from './../../../services/product.service';
import { StatusPage } from './../../../enums/enum-status-page';
import { ProductForm } from './../../../entities-form/product-form';
import { Product } from './../../../entities/product';
import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Type } from 'src/app/entities/type';
import { TypeService } from 'src/app/services/types.service';

@Component
(
  {
    selector: 'app-update-products-component',
    templateUrl: './update-products-component.component.html',
    styleUrls: 
    
    [
      './../../components.css'
    ],
    providers:
    [
        ProductService,
        TypeService,
        MyRoutingService
    ]
  }
)
export class UpdateProductsComponentComponent implements OnInit, OnDestroy
{
  /*
    Eventos
  */
  @Output() statusPageEvent = new EventEmitter <StatusPage>();

  /*
    Variables
  */
  @Input() product? : Product = new Product();
  public productForm : ProductForm;
  public workProduct : Product;

  public listTypes : Type[] | undefined;
  public selectedType : Type | undefined;

  /*
    Constructor
    this.myRoutingService.reloadCurrentRoute(this.router);
  */
  constructor
  (
    private productService : ProductService,
    private typeService : TypeService,
    private myRoutingService : MyRoutingService,
    private router : Router
  )
  {
    this.productForm = new ProductForm();
    this.workProduct = new Product();
    this.listTypes = new Array<Type>();
    this.selectedType = new Type();
  }
  
  /*
    Métodos implementados de interfaces
  */
  ngOnInit(): void 
  {
    this.typeService.readAllTypes().subscribe
    (
      response =>
      {
        this.listTypes = response.response

        if(this.listTypes && this.listTypes.length > 0)
        {
          this.selectedType = this.listTypes[0];
        }
      }
    )

    if(this.product != undefined)
    {
      if(this.product.id != -1)
      {
        //this.workForm = this.form;
        this.workProduct.id = this.product.id;
        this.workProduct.name = this.product.name;
        this.workProduct.stock  = this.product.stock;
        this.workProduct.type = this.product.type;

        this.productForm.id = this.product.id;
      }
      else
      {
      }
      
    }
    this.resetForm();
  }

  ngOnDestroy(): void 
  {

  }

  /*
    Métodos de Botones
  */
  public goBackBtn()
  {
    this.changeStatusPage(StatusPage.ReadAll);
  }

  public sendDatasBtn(formData : ProductForm)
  {

  }

  /*
    Métodos de estados
  */
  private changeStatusPage (newStatusPage : StatusPage)
  {
    this.statusPageEvent.emit(newStatusPage);
  }

  /*
    Métodos de formulario
  */
  public submitSendDatas (productForm : ProductForm)
  {
    // Si el ID de Product = 0 (Por defecto) -> Crear
    if (this.workProduct.id == -1)
    {
      if (this.selectedType !== undefined)
      {
        this.productForm.type = this.selectedType;
      }
      this.productService.createProduct(this.productForm).subscribe
      (
        response => 
        {
          alert("Product created");
        }
      )
    }
    else // Si el ID de Product != 0 (Existe) -> Udate
    {
      if (this.selectedType !== undefined)
      {
        this.workProduct.type = this.selectedType;
      }

      this.mapperProduct(); // Mapeamos el workProduct(Product) al formulario(ProductForm)
      this.productService.updateProduct(this.workProduct).subscribe
      (
        response => 
        {
          alert("Product modified");
        }
      )
    }
    this.changeStatusPage(StatusPage.ReadAll);
    this.myRoutingService.reloadCurrentRoute(this.router);
  }

  private mapperProduct () : void
  {
    if (this.productForm.stock != undefined){
      this.workProduct.name = this.productForm.name;
      this.workProduct.stock = this.productForm.stock;
      this.workProduct.type = this.productForm.type;
    }
  }

  public resetForm()
  {
    this.productForm.name = this.workProduct.name;
    this.productForm.stock = this.workProduct.stock;
    this.productForm.type = this.workProduct.type;
  }

  public changeTypeSelection()
  {
    this.selectedType = this.productForm.type;
  }
}
