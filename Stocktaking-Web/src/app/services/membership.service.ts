import { Observable } from 'rxjs';
import { PathsUser } from './../PathsApi/PathsUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membership } from '../entities/membership';
import { MembershipForm } from '../entities-form/membership-form';
import { MyHttpService } from './my-http-service';
import { DeleteResponse } from '../entities-response/delete-response';
import { ApiResponse } from '../entities-response/apiResponse';

@Injectable()
export class MembershipService  extends MyHttpService
{

  private _baseUrl: string;
  private _membership: string;
  private _memberships: string;

  constructor
  (
    private http: HttpClient
  ) 
  {
    super();
    this._baseUrl = PathsUser.PATH_SERVER;
    this._membership = PathsUser.MEMBERSHIP;
    this._memberships = PathsUser.ALL_MEMBERSHIPS;
  }

   /*
    Método (Crud -> Create) Crear _membership
    Objetivo:
    Entrada:
    Salida
  */
  createMembership(newMembership: MembershipForm): Observable<ApiResponse<Membership>> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl+ this._membership
    
    //return this.http.post<Type>(url, newType);
    console.log(newMembership);
    return this.http.post<ApiResponse<Membership>>(url, newMembership, header);
  }

  updateMembership(changeMembership : Membership): Observable<ApiResponse<Membership>> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl+ this._membership
    //return this.http.post<NewType>(url, newType, {headers: this.headers});
    console.log(changeMembership);
    return this.http.put<ApiResponse<Membership>>(url, changeMembership);
  }

  deleteMembership(id: number): Observable<ApiResponse<Membership>> 
  {
    const header = this.createHeader();
    
    var url: string = this._baseUrl+ this._membership + '?id=' + id
    
    return this.http.delete<ApiResponse<Membership>>(url, header);
  }


  readAllMemberships(): Observable<ApiResponse<Membership[]>>
  {
    const header = this.createHeader();
    var url: string = this._baseUrl + this._memberships
    return this.http.get<ApiResponse<Membership[]>>(url, header);
  }

  readMembershipById(id: number): Observable<ApiResponse<Membership>> 
  {
    var url: string = this._baseUrl+ this._membership + '?id=' + id
    return this.http.get<ApiResponse<Membership>>(url);
  }
  
}
