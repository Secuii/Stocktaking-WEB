import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathsApi } from '../PathsApi/PathsApi';
import { Supplier } from '../entities/supplier';
import { Observable } from 'rxjs';
import { MyHttpService } from './my-http-service';
import { DeleteResponse } from '../entities-response/delete-response';
import { SupplierForm } from '../entities-form/supplier-form';
import { ApiResponse } from '../entities-response/apiResponse';

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
    this._suppliers = PathsApi.ALL_SUPPLIERS;
  }

/*
    Método (Crud -> Create) Crear supplier
    Objetivo:
    Entrada:
    Salida
  */
    createSupplier(newSupplier: SupplierForm): Observable<ApiResponse<Supplier>> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._supplier
      
      //return this.http.post<Supplier>(url, newSupplier);
      console.log(newSupplier);
      return this.http.post<ApiResponse<Supplier>>(url, newSupplier, header);
    }
  
    /*
      Método (cRud -> Read) Leer todos los suppliers
      Objetivo:
      Entrada:
      Salida
    */
    readAllSuppliers(): Observable<ApiResponse<Supplier[]>>
    {
      const header = this.createHeader();
      var url: string = this._baseUrl + this._suppliers
      return this.http.get<ApiResponse<Supplier[]>> (url, header);
    }
  
    /*
      Método (cRud -> Read) Leer supplier
      Objetivo:
      Entrada:
      Salida
    */
    readSupplier(id: number): Observable<ApiResponse<Supplier>> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._supplier + '?id=' + id
      return this.http.get<ApiResponse<Supplier>>(url, header);
    }
    
    /*
      Método (crUd -> Update) Modificar supplier
      Objetivo:
      Entrada:
      Salida
    */
    updateSupplier(changeSupplier: Supplier): Observable<ApiResponse<Supplier>> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._supplier
      //return this.http.post<NewSupplier>(url, newSupplier, {headers: this.headers});
      console.log(changeSupplier);
      return this.http.put<ApiResponse<Supplier>>(url, changeSupplier);
    }
  
    /*
      Método (cruD -> Delete) Borrar supplier
      Objetivo:
      Entrada:
      Salida
    */
    deleteSupplier(id: number): Observable<ApiResponse<Supplier>> 
    {
      const header = this.createHeader();
      
      var url: string = this._baseUrl+ this._supplier + '?id=' + id
      
      return this.http.delete<ApiResponse<Supplier>>(url, header);
    }
  
}
