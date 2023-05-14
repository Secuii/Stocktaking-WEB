import { Observable } from 'rxjs';
import { PathsApi } from './../PathsApi/PathsApi';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attribute } from '../entities/attribute';
import { AttributeForm } from '../entities-form/attribute-form';
import { MyHttpService } from './my-http-service';
import { DeleteResponse } from '../entities-response/delete-response';



@Injectable()
export class AttributeService extends MyHttpService {
    /*
      Variables
    */
    private _baseUrl: string;
    private _attribute: string;
    private _attributes: string;

    /*
      Constructor
    */
    constructor
        (
            private http: HttpClient
        ) {
        super();
        this._baseUrl = PathsApi.PATH_SERVER;
        this._attribute = PathsApi.ATTRIBUTE;
        this._attributes = PathsApi.ATTRIBUTES;
    }

    /*
      Método (Crud -> Create) Crear attribute
      Objetivo:
      Entrada:
      Salida
    */
    createAttribute(newAttribute: AttributeForm): Observable<Attribute> {
        const header = this.createHeader();
        var url: string = this._baseUrl + this._attribute

        //return this.http.post<Attribute>(url, newAttribute);
        console.log(newAttribute);
        return this.http.post<Attribute>(url, newAttribute, header);
    }

    /*
      Método (cRud -> Read) Leer todos los attributes
      Objetivo:
      Entrada:
      Salida
    */
    readAllAttributes(): Observable<Attribute[]> {
        const header = this.createHeader();
        var url: string = this._baseUrl + this._attributes
        return this.http.get<Attribute[]>(url, header);
    }

    /*
      Método (cRud -> Read) Leer attribute
      Objetivo:
      Entrada:
      Salida
    */
    readAttribute(id: number): Observable<Attribute> {
        const header = this.createHeader();
        var url: string = this._baseUrl + this._attribute + '?id=' + id
        return this.http.get<Attribute>(url, header);
    }

    /*
      Método (crUd -> Update) Modificar attribute
      Objetivo:
      Entrada:
      Salida
    */
    updateAttribute(changeAttribute: Attribute): Observable<Attribute> {
        const header = this.createHeader();
        var url: string = this._baseUrl + this._attribute
        //return this.http.post<NewAttribute>(url, newAttribute, {headers: this.headers});
        console.log(changeAttribute);
        return this.http.put<Attribute>(url, changeAttribute);
    }

    /*
      Método (cruD -> Delete) Borrar attribute
      Objetivo:
      Entrada:
      Salida
    */
    deleteAttribute(id: number): Observable<DeleteResponse> {
        const header = this.createHeader();

        var url: string = this._baseUrl + this._attribute + '?id=' + id

        return this.http.delete<DeleteResponse>(url, header);
    }



    /*
  get headers() {
    return new HttpHeaders()
    .set('Content-Attribute', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }*/

}