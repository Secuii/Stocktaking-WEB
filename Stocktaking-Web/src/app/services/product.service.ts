import { ProductForm } from './../entities-form/product-form';
import { Product } from './../entities/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathsApi } from '../PathsApi/PathsApi';
import { MyHttpService } from './my-http-service';
import { ApiResponse } from '../entities-response/apiResponse';
import { ProductAttribute } from '../entities/productAttribute';
import { TypeAttribute } from '../entities/typeAttribute';


@Injectable()
export class ProductService extends MyHttpService
{
    /*
    Variables
  */
    private _baseUrl: string;
    private _product: string;
    private _productAttribute: string;
    private _products: string;
    private _typeAttribute: string;
  
    /*
      Constructor
    */
    constructor
    (
      private http: HttpClient
    ) 
    {
      super();  
      this._baseUrl = PathsApi.PATH_SERVER;
      this._product = PathsApi.PRODUCT;
      this._productAttribute= PathsApi.PRODUCTATTRIBUTE;
      this._products = PathsApi.ALL_PRODUCTS;
      this._typeAttribute = PathsApi.TYPEATTRIBUTE;
    }
  
    /*
      Método (Crud -> Create) Crear product
      Objetivo:
      Entrada:
      Salida
    */

  createProduct(newProduct: ProductForm): Observable<ApiResponse<Product>> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl+ this._product
    
    //return this.http.post<Product>(url, newProduct);
    console.log(newProduct);
    return this.http.post<ApiResponse<Product>>(url, newProduct, header);
  }
  
    /*
      Método (cRud -> Read) Leer todos los products
      Objetivo:
      Entrada:
      Salida
    */
    readAllProducts(): Observable<ApiResponse<Product[]>>
    {
      const header = this.createHeader();
      var url: string = this._baseUrl + this._products
      return this.http.get<ApiResponse<Product[]>> (url, header);
    }
  
    /*
      Método (cRud -> Read) Leer product
      Objetivo:
      Entrada:
      Salida
    */
    ReadProduct(id: number): Observable<ApiResponse<Product>> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._product + '?id=' + id
      return this.http.get<ApiResponse<Product>>(url, header);
    }

     /*
      Método (cRud -> Read) Leer product
      Objetivo:
      Entrada:
      Salida
    */
    readProductAttribute(id: number): Observable<ApiResponse<Array<ProductAttribute>>> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._productAttribute + '?productId=' + id;
      console.log(url);
      return this.http.get<ApiResponse<Array<ProductAttribute>>>(url, header);
    }

    /*
      Método (cRud -> Read) Leer product
      Objetivo:
      Entrada:
      Salida
    */
      readTypeAttribute(typeId: number): Observable<ApiResponse<Array<TypeAttribute>>> 
      {
        const header = this.createHeader();
        var url: string = this._baseUrl+ this._typeAttribute + '?typeId=' + typeId + '&attributeId=-404';
        console.log(url);
        return this.http.get<ApiResponse<Array<TypeAttribute>>>(url, header);
      }
    
    /*
      Método (crUd -> Update) Modificar product
      Objetivo:
      Entrada:
      Salida
    */
    updateProduct(changeProduct: Product): Observable<ApiResponse<Product>> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._product
      //return this.http.post<NewProduct>(url, newProduct, {headers: this.headers});
      console.log(changeProduct);
      return this.http.put<ApiResponse<Product>>(url, changeProduct);
    }
  
    /*
      Método (cruD -> Delete) Borrar product
      Objetivo:
      Entrada:
      Salida
    */
    deleteProduct(id: number): Observable<ApiResponse<Product>> 
    {
      const header = this.createHeader();
      
      var url: string = this._baseUrl+ this._product + '?id=' + id
      
      return this.http.delete<ApiResponse<Product>>(url, header);
    }
  

}
