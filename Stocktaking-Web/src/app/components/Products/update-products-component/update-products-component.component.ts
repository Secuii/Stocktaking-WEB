import { TypeAttribute } from './../../../entities/typeAttribute';
import { Router } from '@angular/router';
import { MyRoutingService } from './../../../services/my.routing.service';
import { ProductService } from './../../../services/product.service';
import { StatusPage } from './../../../enums/enum-status-page';
import { ProductForm } from './../../../entities-form/product-form';
import { Product } from './../../../entities/product';
import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Type } from 'src/app/entities/type';
import { TypeService } from 'src/app/services/types.service';
import { ProductAttribute } from 'src/app/entities/productAttribute';
import { ApiResponse } from 'src/app/entities-response/apiResponse';

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
  
  public apiResponseStructure : ApiResponse<Array<TypeAttribute>>;
  public typeAttributeStructure : Array<TypeAttribute>;
  public apiResponseListProductAttribute : ApiResponse<Array<ProductAttribute>>;
  public listProductAttribute : Array<ProductAttribute>;

  public listProductAttributeToShow : Array<ProductAttribute>;

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

    this.apiResponseStructure = new ApiResponse<Array<TypeAttribute>>();
    this.typeAttributeStructure = new Array<TypeAttribute>();
    this.apiResponseListProductAttribute = new ApiResponse<Array<ProductAttribute>>();
    this.listProductAttribute = new Array<ProductAttribute>();

    this.listProductAttributeToShow = new Array<ProductAttribute>();
  }
  
  /*
    Métodos implementados de interfaces
  */
  ngOnInit(): void 
  {
    this.doInitServices();
    setTimeout(() => 
    {
      this.doInitServices();
    }, 1000); // Ejemplo: se ejecuta cada 2000 milisegundos (2 segundos)
    
    
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

  private doInitServices () : void
  {
    // Call Services Init: readAllTypes
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
    );

    if(this.product != undefined)
    {
      if(this.product.id != -1)
      {
        let typeId :number;
        if (!this.product.type?.id) 
        {
          typeId = -404;
        }
        else
        {
          typeId = this.product.type?.id;
        }

        //this.workForm = this.form;
        this.workProduct.id = this.product.id;
        this.workProduct.name = this.product.name;
        this.workProduct.stock  = this.product.stock;
        this.workProduct.type = this.product.type;

        this.productForm.id = this.product.id;

        // Call Services Init: readTypeAttribute
        this.productService.readTypeAttribute(typeId).subscribe
        (
          response =>
          {
            this.apiResponseStructure = response;
            if (this.apiResponseStructure.response)
            {
              this.typeAttributeStructure = this.apiResponseStructure.response;
            }
          }
        );

        this.productService.readProductAttribute(this.product.id).subscribe
        (
          response => 
          {
            this.apiResponseListProductAttribute = response;
            if (this.apiResponseListProductAttribute.response)
            {
              this.listProductAttribute = this.apiResponseListProductAttribute.response;
            }
          }
        );

        console.log ("Estructura : " + this.typeAttributeStructure.length);
        console.log ("Valores : " + this.listProductAttribute.length);

        if (this.typeAttributeStructure.length > 0 && this.listProductAttribute.length > 0)
        {
          for (let i = 0; i < this.typeAttributeStructure.length; i++) 
          {
            
            let attributeToAdd : ProductAttribute = new ProductAttribute();
            let elementStructure : TypeAttribute = this.typeAttributeStructure[i];
            this.listProductAttributeToShow.push(attributeToAdd);
            console.log(elementStructure.attributeId);
            for (let j = 0; j < this.listProductAttribute.length; j++)
            {
              let elementValue = this.listProductAttribute[j];
              console.log(elementValue.attributeId);

              attributeToAdd.attributeId = elementStructure.attributeId;
              if (elementStructure.attributeId == elementValue.attributeId)
              {
                attributeToAdd.attributeName = elementValue.attributeName;
                attributeToAdd.productId = elementValue.productId;
                attributeToAdd.value = elementValue.value;

                break;
              }
            }
            
          }
        }
      }
      else
      {
      }

    }

  }
}
