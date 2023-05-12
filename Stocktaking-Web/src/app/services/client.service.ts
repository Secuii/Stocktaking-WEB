import { Injectable } from '@angular/core';
import { MyHttpService } from './my-http-service';
import { HttpClient } from '@angular/common/http';
import { PathsApi } from '../PathsApi/PathsApi';
import { Observable } from 'rxjs';
import { Client } from '../entities/client';
import { DeleteResponse } from '../entities-response/delete-response';
import { ClientForm } from '../entities-form/client-form';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends MyHttpService
{
/*
    Variables
  */
    private _baseUrl: string;
    private _client: string;
    private _clients: string;
  
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
      this._client = PathsApi.CLIENT;
      this._clients = PathsApi.CLIENTS;
    }
  
    /*
      Método (Crud -> Create) Crear client
      Objetivo:
      Entrada:
      Salida
    */
    createClient(newClient: ClientForm): Observable<Client> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._client
      
      //return this.http.post<Client>(url, newClient);
      console.log(newClient);
      return this.http.post<Client>(url, newClient, header);
    }
  
    /*
      Método (cRud -> Read) Leer todos los clients
      Objetivo:
      Entrada:
      Salida
    */
    readAllClients(): Observable<Client[]>
    {
      const header = this.createHeader();
      var url: string = this._baseUrl + this._clients
      return this.http.get<Client[]> (url, header);
    }
  
    /*
      Método (cRud -> Read) Leer client
      Objetivo:
      Entrada:
      Salida
    */
    readClient(id: number): Observable<Client> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._client + '?id=' + id
      return this.http.get<Client>(url, header);
    }
    
    /*
      Método (crUd -> Update) Modificar client
      Objetivo:
      Entrada:
      Salida
    */
    updateClient(changeClient: Client): Observable<Client> 
    {
      const header = this.createHeader();
      var url: string = this._baseUrl+ this._client
      //return this.http.post<NewClient>(url, newClient, {headers: this.headers});
      console.log(changeClient);
      return this.http.put<Client>(url, changeClient);
    }
  
    /*
      Método (cruD -> Delete) Borrar client
      Objetivo:
      Entrada:
      Salida
    */
    deleteClient(id: number): Observable<DeleteResponse> 
    {
      const header = this.createHeader();
      
      var url: string = this._baseUrl+ this._client + '?id=' + id
      
      return this.http.delete<DeleteResponse>(url, header);
    }
  
    
  
      /*
    get headers() {
      return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    }*/
   
}
