import { Product } from './../entities/product';
import { Observable } from 'rxjs';
import { PathsUser } from './../PathsApi/PathsUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService 
{

  private _baseUrl: string;
  private _product: string;
  private _products: string;

  constructor(private http: HttpClient) 
  {
    
    this._baseUrl = PathsUser.PATH_SERVER;
    this._product = PathsUser.PERMISSION;
    this._products = PathsUser.PERMISSIONS;
  }


  findProducts(): Observable<Product[]>
  {
    var url: string = this._baseUrl + this._products
    return this.http.get<Product[]>(url);
  }

  getProductById(id: number): Observable<Product> 
  {
    var url: string = this._baseUrl+ this._product + '?id=' + id
    return this.http.get<Product>(url);
  }
  
  deleteProduct(id: number): Observable<Product> 
  {
    var url: string = this._baseUrl+ this._product + '?id=' + id
    return this.http.delete<Product>(url);
  }


  addProduct(newProduct: Product): Observable<Product> 
  {
    var url: string = this._baseUrl+ this._product
    //return this.http.post<NewMembership>(url, newMembership, {headers: this.headers});
    return this.http.post<Product>(url, newProduct);
  }

    /*
  get headers() {
    return new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }
  */
  
}
