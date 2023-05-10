import { Observable } from 'rxjs';
import { PathsUser } from './../PathsApi/PathsUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membership } from '../entities/membership';
import { NewMembership } from '../entities/membership_interface';
import { PathsApi } from '../PathsApi/PathsApi';
import { MembershipForm } from '../entities-form/membership-form';
import { MyHttpService } from './my-http-service';
import { DeleteResponse } from '../entities-response/delete-response';

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
    this._memberships = PathsUser.MEMBERSHIPS;
  }

   /*
    Método (Crud -> Create) Crear _membership
    Objetivo:
    Entrada:
    Salida
  */
  createMembership(newMembership: MembershipForm): Observable<Membership> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl+ this._membership
    
    //return this.http.post<Type>(url, newType);
    console.log(newMembership);
    return this.http.post<Membership>(url, newMembership, header);
  }

  updateMembership(changeMembership : Membership): Observable<Membership> 
  {
    const header = this.createHeader();
    var url: string = this._baseUrl+ this._membership
    //return this.http.post<NewType>(url, newType, {headers: this.headers});
    console.log(changeMembership);
    return this.http.put<Membership>(url, changeMembership);
  }

  deleteMembership(id: number): Observable<DeleteResponse> 
  {
    const header = this.createHeader();
    
    var url: string = this._baseUrl+ this._membership + '?id=' + id
    
    return this.http.delete<DeleteResponse>(url, header);
  }


  findMemberships(): Observable<Membership[]>
  {
    var url: string = this._baseUrl + this._memberships
    return this.http.get<Membership[]>(url);
  }

  getMembershipById(id: number): Observable<Membership> 
  {
    var url: string = this._baseUrl+ this._membership + '?id=' + id
    return this.http.get<Membership>(url);
  }
  
  /*
  deleteMembership(id: number): Observable<Membership> 
  {
    var url: string = this._baseUrl+ this._membership + '?id=' + id
    return this.http.delete<Membership>(url);
  }
*/
/*
  addMembership(newMembership: NewMembership): Observable<NewMembership> 
  {
    var url: string = this._baseUrl+ this._membership
    //return this.http.post<NewMembership>(url, newMembership, {headers: this.headers});
    return this.http.post<NewMembership>(url, newMembership);
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
