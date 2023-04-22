import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathsApi } from '../PathsApi/PathsApi';
import { Supplier } from '../entities/supplier';
import { Observable } from 'rxjs';
import { NewSupplier } from '../entities/supplier_interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private _baseUrl: string;
  private _supplier: string;
  private _suppliers: string;

  constructor(private http: HttpClient) {
    this._baseUrl = PathsApi.PATH_SERVER;
    this._supplier = PathsApi.SUPPLIER;
    this._suppliers = PathsApi.SUPPLIERS;
  }


  findSuppliers(): Observable<Supplier[]>{
    var url: string = this._baseUrl + this._suppliers
    return this.http.get<Supplier[]>(url);
  }

  getSupplierById(id: number): Observable<Supplier> {
    var url: string = this._baseUrl+ this._supplier + '?id=' + id
    return this.http.get<Supplier>(url);
  }
  
  deleteSupplier(id: number): Observable<Supplier> {
    var url: string = this._baseUrl+ this._supplier + '?id=' + id
    return this.http.delete<Supplier>(url);
  }


  addSupplier(newSupplier: NewSupplier): Observable<NewSupplier> {
    var url: string = this._baseUrl+ this._supplier
    //return this.http.post<NewSupplier>(url, newSupplier, {headers: this.headers});
    return this.http.post<NewSupplier>(url, newSupplier);
  }

    /*
  get headers() {
    return new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }
  */
  
}
