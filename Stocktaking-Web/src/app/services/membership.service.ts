import { Observable } from 'rxjs';
import { PathsUser } from './../PathsApi/PathsUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membership } from '../entities/membership';
import { NewMembership } from '../entities/membership_interface';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  private _baseUrl: string;
  private _membership: string;
  private _memberships: string;

  constructor(private http: HttpClient) {
    this._baseUrl = PathsUser.PATH_SERVER;
    this._membership = PathsUser.MEMBERSHIP;
    this._memberships = PathsUser.MEMBERSHIPS;
  }


  findMemberships(): Observable<Membership[]>{
    var url: string = this._baseUrl + this._memberships
    return this.http.get<Membership[]>(url);
  }

  getMembershipById(id: number): Observable<Membership> {
    var url: string = this._baseUrl+ this._membership + '?id=' + id
    return this.http.get<Membership>(url);
  }
  
  deleteMembership(id: number): Observable<Membership> {
    var url: string = this._baseUrl+ this._membership + '?id=' + id
    return this.http.delete<Membership>(url);
  }


  addMembership(newMembership: NewMembership): Observable<NewMembership> {
    var url: string = this._baseUrl+ this._membership
    //return this.http.post<NewMembership>(url, newMembership, {headers: this.headers});
    return this.http.post<NewMembership>(url, newMembership);
  }

    /*
  get headers() {
    return new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }
  */
  
}
