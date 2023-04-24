import { Observable } from 'rxjs';
import { PathsApi } from './../PathsApi/PathsApi';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Type } from '../entities/type';



@Injectable()
export class TypeService 
{


  private _baseUrl: string;
  private _type: string;
  private _types: string;

  constructor(private http: HttpClient) 
  {
    
    this._baseUrl = PathsApi.PATH_SERVER;
    this._type = PathsApi.TYPE;
    this._types = PathsApi.TYPES;
  }


  findTypes(): Observable<Type[]>
  {
    var url: string = this._baseUrl + this._type
    return this.http.get<Type[]>(url);
  }

  getTypeById(id: number): Observable<Type> 
  {
    var url: string = this._baseUrl+ this._type + '?id=' + id
    return this.http.get<Type>(url);
  }
  
  deleteType(id: number): Observable<Type> 
  {
    var url: string = this._baseUrl+ this._type + '?id=' + id
    return this.http.delete<Type>(url);
  }


  addType(newType: Type): Observable<Type> 
  {
    var url: string = this._baseUrl+ this._type
    //return this.http.post<NewType>(url, newType, {headers: this.headers});
    return this.http.post<Type>(url, newType);
  }

    /*
  get headers() {
    return new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }*/
  
}