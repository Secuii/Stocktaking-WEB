import { Observable } from 'rxjs';
import { PathsUser } from './../PathsApi/PathsUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService 
{

  private _baseUrl: string;
  private _permission: string;
  private _permissions: string;

  constructor(private http: HttpClient) 
  {
    
    this._baseUrl = PathsUser.PATH_SERVER;
    this._permission = PathsUser.PERMISSION;
    this._permissions = PathsUser.PERMISSIONS;
  }


  findPermisions(): Observable<Permissions[]>
  {
    var url: string = this._baseUrl + this._permissions
    return this.http.get<Permissions[]>(url);
  }

  getPermisionById(id: number): Observable<Permissions> 
  {
    var url: string = this._baseUrl+ this._permission + '?id=' + id
    return this.http.get<Permissions>(url);
  }
  
  deletePermision(id: number): Observable<Permissions> 
  {
    var url: string = this._baseUrl+ this._permission + '?id=' + id
    return this.http.delete<Permissions>(url);
  }


  addPermision(newPermission: Permissions): Observable<Permissions> 
  {
    var url: string = this._baseUrl+ this._permission
    //return this.http.post<NewMembership>(url, newMembership, {headers: this.headers});
    return this.http.post<Permissions>(url, newPermission);
  }

    /*
  get headers() {
    return new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }
  */
  
}
