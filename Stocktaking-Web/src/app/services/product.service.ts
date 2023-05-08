import { ProductForm } from './../entities-form/product-form';
import { Product } from './../entities/product';
import { Observable } from 'rxjs';
import { PathsUser } from './../PathsApi/PathsUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathsApi } from '../PathsApi/PathsApi';
import { MyHttpService } from './my-http-service';
import { DeleteResponse } from '../entities-response/delete-response';


@Injectable()
export class ProductService extends MyHttpService
{
    /*
    Variables
  */
    private _baseUrl: string;
    private _product: string;
    private _products: string;
  
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
      this._products = PathsApi.PRODUCTS;
    }
  
    /*
      Método (Crud -> Create) Crear product
      Objetivo:
      Entrada:
      Salida
    */

    createProduct(newProduct: ProductForm): Observable<Product> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl+ this._product
    
    //return this.http.post<Product>(url, newProduct);
    console.log(newProduct);
    return this.http.post<Product>(url, newProduct, header);
  }
  
    /*
      Método (cRud -> Read) Leer todos los products
      Objetivo:
      Entrada:
      Salida
    */
    readAllProducts(): Observable<Product[]>
    {
      const header = this.createHeader();
      var url: string = this._baseUrl + this._products
      return this.http.get<Product[]> (url, header);
    }
  
    /*
      Método (cRud -> Read) Leer product
      Objetivo:
      Entrada:
      Salida
    */
      ReadProduct(id: number): Observable<Product> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._product + '?id=' + id
      return this.http.get<Product>(url, header);
    }
    
    /*
      Método (crUd -> Update) Modificar product
      Objetivo:
      Entrada:
      Salida
    */
    updateProduct(changeProduct: Product): Observable<Product> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._product
      //return this.http.post<NewProduct>(url, newProduct, {headers: this.headers});
      console.log(changeProduct);
      return this.http.put<Product>(url, changeProduct);
    }
  
    /*
      Método (cruD -> Delete) Borrar product
      Objetivo:
      Entrada:
      Salida
    */
    deleteProduct(id: number): Observable<DeleteResponse> 
    {
      const header = this.createHeader();
      
      var url: string = this._baseUrl+ this._product + '?id=' + id
      
      return this.http.delete<DeleteResponse>(url, header);
    }
  
    
  
      /*
    get headers() {
      return new HttpHeaders()
      .set('Content-Product', 'application/json')
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    }*/
}
