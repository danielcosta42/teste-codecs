import { Anuncio } from './anuncio/anuncio.model';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Http } from '@angular/http';
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class AnunciosService {

  constructor(private http: Http) {}

  anuncios(): Observable<Anuncio[]> {
    return this.http.get(`${MEAT_API}/anuncios`)
      .map(response => response.json().resultado)
      .catch(ErrorHandler.handleError)
  }

  anunciosById(id: string): Observable<Anuncio[]> {
    return this.http.get(`${MEAT_API}/anuncios?id=${id}`)
      .map(results => results.json().resultado)
      .catch(ErrorHandler.handleError)
  }
}
