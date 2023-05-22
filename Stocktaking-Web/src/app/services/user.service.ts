import { Observable } from 'rxjs';
import { PathsUser } from '../PathsApi/PathsUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { UserForm } from '../entities-form/user-form';
import { MyHttpService } from './my-http-service';
import { DeleteResponse } from '../entities-response/delete-response';
import { ApiResponse } from '../entities-response/apiResponse';



@Injectable()
export class UserService extends MyHttpService {
    /*
      Variables
    */
    private _baseUrl: string;
    private _user: string;
    private _users: string;

    /*
      Constructor
    */
    constructor
    (
        private http: HttpClient
    ) 
    {
        super();
        this._baseUrl = PathsUser.PATH_SERVER;
        this._user = PathsUser.USER;
        this._users = PathsUser.ALL_USERS;
    }

    /*
      Método (Crud -> Create) Crear user
      Objetivo:
      Entrada:
      Salida
    */
    createUser(newUser: UserForm): Observable<ApiResponse<User>> {
        const header = this.createHeader();
        var url: string = this._baseUrl + this._user

        //return this.http.post<User>(url, newUser);
        console.log(newUser);
        return this.http.post<ApiResponse<User>>(url, newUser, header);
    }

    /*
      Método (cRud -> Read) Leer todos los users
      Objetivo:
      Entrada:
      Salida
    */
    readAllUsers(): Observable<ApiResponse<User[]>> 
    {
        const header = this.createHeader();
        var url: string = this._baseUrl + this._users
        return this.http.get<ApiResponse<User[]>>(url, header);
    }

    /*
      Método (cRud -> Read) Leer user
      Objetivo:
      Entrada:
      Salida
    */
    readUserById(id: number): Observable<ApiResponse<User>> 
    {
        const header = this.createHeader();
        var url: string = this._baseUrl + this._user + '?id=' + id
        return this.http.get<ApiResponse<User>>(url, header);
    }

    /*
      Método (crUd -> Update) Modificar user
      Objetivo:
      Entrada:
      Salida
    */
    updateUser(changeUser: User): Observable<ApiResponse<User>> {
        const header = this.createHeader();
        var url: string = this._baseUrl + this._user
        //return this.http.post<NewUser>(url, newUser, {headers: this.headers});
        console.log(changeUser);
        return this.http.put<ApiResponse<User>>(url, changeUser);
    }

    /*
      Método (cruD -> Delete) Borrar user
      Objetivo:
      Entrada:
      Salida
    */
    deleteUser(id: number): Observable<ApiResponse<User>> {
        const header = this.createHeader();

        var url: string = this._baseUrl + this._user + '?id=' + id

        return this.http.delete<ApiResponse<User>>(url, header);
    }



    /*
  get headers() {
    return new HttpHeaders()
    .set('Content-User', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }*/

}