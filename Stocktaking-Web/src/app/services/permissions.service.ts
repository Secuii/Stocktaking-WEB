import { Observable } from 'rxjs';
import { PathsUser } from '../PathsApi/PathsUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Permission } from '../entities/permission';
import { PermissionForm } from '../entities-form/permission-form';
import { MyHttpService } from './my-http-service';
import { DeleteResponse } from '../entities-response/delete-response';
import { ApiResponse } from '../entities-response/apiResponse';



@Injectable()
export class PermissionService extends MyHttpService {
  /*
    Variables
  */
  private _baseUrl: string;
  private _permission: string;
  private _permissions: string;

  /*
    Constructor
  */
  constructor
    (
      private http: HttpClient
    ) {
    super();
    this._baseUrl = PathsUser.PATH_SERVER;
    this._permission = PathsUser.PERMISSION;
    this._permissions = PathsUser.ALL_PERMISSIONS;
  }

  /*
    Método (Crud -> Create) Crear permission
    Objetivo:
    Entrada:
    Salida
  */
  createPermission(newPermission: PermissionForm): Observable<ApiResponse<Permission>> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl + this._permission

    //return this.http.post<Permission>(url, newPermission);
    console.log(newPermission);
    return this.http.post<ApiResponse<Permission>>(url, newPermission, header);
  }

  /*
    Método (cRud -> Read) Leer todos los permissions
    Objetivo:
    Entrada:
    Salida
  */
  readAllPermissions(): Observable<ApiResponse<Permission[]>> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl + this._permissions
    return this.http.get<ApiResponse<Permission[]>>(url, header);
  }

  /*
    Método (cRud -> Read) Leer permission
    Objetivo:
    Entrada:
    Salida
  */
  readPermission(id: number): Observable<Permission> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl + this._permission + '?id=' + id
    return this.http.get<Permission>(url, header);
  }

  /*
    Método (crUd -> Update) Modificar permission
    Objetivo:
    Entrada:
    Salida
  */
  updatePermission(changePermission: Permission): Observable<ApiResponse<Permission>> {
    const header = this.createHeader();
    var url: string = this._baseUrl + this._permission
    //return this.http.post<NewPermission>(url, newPermission, {headers: this.headers});
    console.log(changePermission);
    return this.http.put<ApiResponse<Permission>>(url, changePermission);
  }

  /*
    Método (cruD -> Delete) Borrar permission
    Objetivo:
    Entrada:
    Salida
  */
  deletePermission(id: number): Observable<ApiResponse<Permission>> {
    const header = this.createHeader();

    var url: string = this._baseUrl + this._permission + '?id=' + id

    return this.http.delete<ApiResponse<Permission>>(url, header);
  }

}
