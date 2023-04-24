import { Permission } from './../entities/permission';
import { Observable } from 'rxjs';
import { PathsUser } from './../PathsApi/PathsUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PermissionService 
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


  findPermissions(): Observable<Permission[]>
  {
    var url: string = this._baseUrl + this._permissions
    return this.http.get<Permission[]>(url);
  }

  getPermissionById(id: number): Observable<Permission> 
  {
    var url: string = this._baseUrl+ this._permission + '?id=' + id
    return this.http.get<Permission>(url);
  }
  
  deletePermission(id: number): Observable<Permission> 
  {
    var url: string = this._baseUrl+ this._permission + '?id=' + id
    return this.http.delete<Permission>(url);
  }


  addPermission(newPermission: Permission): Observable<Permission> 
  {
    var url: string = this._baseUrl+ this._permission
    //return this.http.post<NewMembership>(url, newMembership, {headers: this.headers});
    return this.http.post<Permission>(url, newPermission);
  }

    /*
  get headers() {
    return new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }
  */
  
}
