import { Observable } from 'rxjs';
import { PathsApi } from './../PathsApi/PathsApi';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Type } from '../entities/type';
import { TypeForm } from '../entities-form/type-form';
import { MyHttpService } from './my-http-service';
import { DeleteResponse } from '../entities-response/delete-response';
import { ApiResponse } from '../entities-response/apiResponse';



@Injectable()
export class TypeService extends MyHttpService
{
  /*
    Variables
  */
  private _baseUrl: string;
  private _type: string;
  private _types: string;

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
    this._type = PathsApi.TYPE;
    this._types = PathsApi.ALL_TYPES;
  }

  /*
    Método (Crud -> Create) Crear type
    Objetivo:
    Entrada:
    Salida
  */
  createType(newType: TypeForm): Observable<ApiResponse<Type>> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl+ this._type
    
    //return this.http.post<Type>(url, newType);
    console.log(newType);
    return this.http.post<ApiResponse<Type>>(url, newType, header);
  }

  /*
    Método (cRud -> Read) Leer todos los types
    Objetivo:
    Entrada:
    Salida
  */
  readAllTypes(): Observable<ApiResponse<Type[]>>
  {
    const header = this.createHeader();
    var url: string = this._baseUrl + this._types
    return this.http.get<ApiResponse<Type[]>> (url, header);
  }

  /*
    Método (cRud -> Read) Leer type
    Objetivo:
    Entrada:
    Salida
  */
  readType(id: number): Observable<ApiResponse<Type>> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl+ this._type + '?id=' + id
    return this.http.get<ApiResponse<Type>>(url, header);
  }
  
  /*
    Método (crUd -> Update) Modificar type
    Objetivo:
    Entrada:
    Salida
  */
  updateType(changeType: Type): Observable<ApiResponse<Type>> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl+ this._type
    //return this.http.post<NewType>(url, newType, {headers: this.headers});
    console.log(changeType);
    return this.http.put<ApiResponse<Type>>(url, changeType);
  }

  /*
    Método (cruD -> Delete) Borrar type
    Objetivo:
    Entrada:
    Salida
  */
  deleteType(id: number): Observable<ApiResponse<Type>> 
  {
    const header = this.createHeader();
    
    var url: string = this._baseUrl+ this._type + '?id=' + id
    
    return this.http.delete<ApiResponse<Type>>(url, header);
  }
  
}