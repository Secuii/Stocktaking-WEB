import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './../entities/user';
import { Injectable } from '@angular/core';
import { MyHttpService } from './my-http-service';
import { PathsApi } from '../PathsApi/PathsApi';
import { PathsUser } from '../PathsApi/PathsUser';
import { Observable } from 'rxjs';
import { ApiResponse } from '../entities-response/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends MyHttpService {

  private _baseUrl: string;
  private _user: string;


  constructor(
    private http: HttpClient
  ) {
    super();
    this._baseUrl = PathsUser.PATH_SERVER;
    this._user = PathsUser.LOGIN;
  }


  public getUser(): any {

    return localStorage.getItem("user");
  }

  public setUser(user: any): void {

    localStorage.setItem("user", user);
    console.log(user);
  }

  public getPermission(): any {

    return localStorage.getItem("permission")
  }

  public setPermission(permission: any): void {

    localStorage.setItem("permission", permission);
  }

  public generateLogin(user: any, permission: any) {
    this.setUser(user);
    this.setPermission(permission);
  }

  public isLoged(): boolean {
    if (localStorage.getItem("user") != "") {
      return true;
    }
    else {
      return false;
    }
  }

  public logOut(): void {

    this.setUser("");
    this.setPermission("");
    localStorage.clear;

  }

  // A partir de aquí, métodos de base de datos


  readUser(email: string, password: string): Observable<ApiResponse<User>> {
    const header = this.createHeader();

    // Crea los parámetros usando HttpParams
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    // Concatena los parámetros a la URL
    const url: string = this._baseUrl + this._user + '?' + params.toString();
    return this.http.get<ApiResponse<User>>(url, header);

  }


}
