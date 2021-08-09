import { Select } from './select.model';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Http, Headers, RequestOptions } from '@angular/http';
import {ErrorHandler} from '../app.error-handler'
import {Anuncio} from './novoanuncio.model'

@Injectable()
export class CriarAnunciosService {

  constructor(private http: Http) {}

  carros(): Observable<Select[]> {
    return this.http.get(`${MEAT_API}/modelos`)
      .map(response => response.json().resultado)
      .catch(ErrorHandler.handleError)
  }
  anos(): Observable<Select[]> {
    return this.http.get(`${MEAT_API}/anos`)
      .map(response => response.json().resultado)
      .catch(ErrorHandler.handleError)
  }

  enviaAnuncio(anuncio: Anuncio): Observable<string>{
    const headers = new Headers
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${MEAT_API}/anuncios`,
          JSON.stringify(anuncio),
          new RequestOptions({headers: headers}))
          .map(response=> response.json().resultado)
  }


}
