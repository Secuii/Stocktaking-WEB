import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathsApi } from '../PathsApi/PathsApi';
import { Supplier } from '../entities/supplier';
import { Observable } from 'rxjs';
import { NewSupplier } from '../entities/supplier_interface';
import { MyHttpService } from './my-http-service';
import { DeleteResponse } from '../entities-response/delete-response';
import { SupplierForm } from '../entities-form/supplier-form';

@Injectable({
  providedIn: 'root'
})
export class SupplierService extends MyHttpService
{
/*
  Variables
*/
  private _baseUrl: string;
  private _supplier: string;
  private _suppliers: string;

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
    this._supplier = PathsApi.SUPPLIER;
    this._suppliers = PathsApi.SUPPLIERS;
  }

/*
    Método (Crud -> Create) Crear supplier
    Objetivo:
    Entrada:
    Salida
  */
    createSupplier(newSupplier: SupplierForm): Observable<Supplier> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._supplier
      
      //return this.http.post<Supplier>(url, newSupplier);
      console.log(newSupplier);
      return this.http.post<Supplier>(url, newSupplier, header);
    }
  
    /*
      Método (cRud -> Read) Leer todos los suppliers
      Objetivo:
      Entrada:
      Salida
    */
    readAllSuppliers(): Observable<Supplier[]>
    {
      const header = this.createHeader();
      var url: string = this._baseUrl + this._suppliers
      return this.http.get<Supplier[]> (url, header);
    }
  
    /*
      Método (cRud -> Read) Leer supplier
      Objetivo:
      Entrada:
      Salida
    */
    readSupplier(id: number): Observable<Supplier> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._supplier + '?id=' + id
      return this.http.get<Supplier>(url, header);
    }
    
    /*
      Método (crUd -> Update) Modificar supplier
      Objetivo:
      Entrada:
      Salida
    */
    updateSupplier(changeSupplier: Supplier): Observable<Supplier> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._supplier
      //return this.http.post<NewSupplier>(url, newSupplier, {headers: this.headers});
      console.log(changeSupplier);
      return this.http.put<Supplier>(url, changeSupplier);
    }
  
    /*
      Método (cruD -> Delete) Borrar supplier
      Objetivo:
      Entrada:
      Salida
    */
    deleteSupplier(id: number): Observable<DeleteResponse> 
    {
      const header = this.createHeader();
      
      var url: string = this._baseUrl+ this._supplier + '?id=' + id
      
      return this.http.delete<DeleteResponse>(url, header);
    }
  

/*---------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/

  /*
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

*/
    /*
  get headers() {
    return new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }
  */
  
}
