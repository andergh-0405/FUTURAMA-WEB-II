import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaApi } from '../models/personajes';

@Injectable({
  providedIn: 'root',
})
export class Futurama {

  private http = inject(HttpClient);

  private API_PERSONAJES = 'https://futuramaapi.com/';

  getPersonajes():Observable <RespuestaApi>{
    return this.http.get<RespuestaApi>(this.API_PERSONAJES)
  }

}
